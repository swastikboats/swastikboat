import assert from "node:assert/strict";
import test from "node:test";
import { createQuotePostHandler } from "./quote-handler.js";

const validPayload = {
  name: "Rowing Club",
  email: "buyer@example.com",
  countryCode: "+91",
  mobileNumber: "9876543210",
  boatInterest: "Single",
  message: "Please send details.",
};

function createRequest(payload = validPayload, options = {}) {
  const headers = {
    "content-type": options.contentType || "application/json",
    "x-forwarded-for": options.ip || "203.0.113.10",
  };
  if (options.includeOrigin !== false) {
    headers.origin = options.origin || "https://swastikboats.com";
  }

  return new Request("https://swastikboats.com/api/submit-quote", {
    method: "POST",
    headers,
    body: options.rawBody ?? JSON.stringify(payload),
  });
}

function createHarness(sendMail = async (mail) => ({ accepted: [mail.to], rejected: [] })) {
  const sentMail = [];
  const logs = [];
  const handler = createQuotePostHandler({
    createTransport: () => ({
      sendMail: (mail) => {
        sentMail.push(mail);
        return sendMail(mail);
      },
    }),
    emailUser: "sender@example.com",
    emailPass: "test-only-placeholder",
    adminEmail: "admin@example.com",
    productTitles: ["Single"],
    logger: { error: (...args) => logs.push(args) },
  });
  return { handler, sentMail, logs };
}

async function getJson(response) {
  return { status: response.status, body: await response.json() };
}

test("valid quote sends both emails through mocked transport", async () => {
  const { handler, sentMail } = createHarness();
  const result = await getJson(await handler(createRequest()));

  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(sentMail.length, 2);
  assert.equal(sentMail[0].to, "admin@example.com");
  assert.equal(sentMail[1].to, validPayload.email);
});

test("rejects invalid email and missing required fields", async () => {
  const { handler, sentMail } = createHarness();
  const badEmail = await getJson(
    await handler(createRequest({ ...validPayload, email: "no-at-sign" }))
  );
  const headerInjection = await getJson(
    await handler(createRequest({ ...validPayload, email: "buyer@example.com\r\nBcc:other@example.com" }))
  );
  const missingName = await getJson(
    await handler(createRequest({ ...validPayload, name: " " }))
  );

  assert.equal(badEmail.status, 400);
  assert.equal(headerInjection.status, 400);
  assert.equal(badEmail.body.success, false);
  assert.equal(missingName.status, 400);
  assert.equal(sentMail.length, 0);
});

test("defaults an omitted optional boat interest to General Inquiry", async () => {
  const { handler, sentMail } = createHarness();
  const { boatInterest, ...payload } = validPayload;
  const result = await getJson(await handler(createRequest(payload)));

  assert.equal(result.status, 200);
  assert.match(sentMail[0].subject, /General Inquiry/);
});

test("rejects invalid boat selection and malformed JSON", async () => {
  const { handler, sentMail } = createHarness();
  const invalidBoat = await getJson(
    await handler(createRequest({ ...validPayload, boatInterest: "Secret Product" }))
  );
  const malformedJson = await getJson(
    await handler(createRequest(null, { rawBody: "{" }))
  );

  assert.equal(invalidBoat.status, 400);
  assert.equal(malformedJson.status, 400);
  assert.equal(sentMail.length, 0);
});

test("rejects oversized and non-JSON requests", async () => {
  const { handler, sentMail } = createHarness();
  const oversized = await getJson(
    await handler(createRequest({ ...validPayload, message: "x".repeat(9000) }))
  );
  const unsupportedType = await getJson(
    await handler(createRequest(validPayload, { contentType: "text/plain" }))
  );

  assert.equal(oversized.status, 413);
  assert.equal(unsupportedType.status, 415);
  assert.equal(sentMail.length, 0);
});

test("does not report success when either email fails", async () => {
  for (const failedRecipient of ["admin@example.com", validPayload.email]) {
    const { handler, logs } = createHarness((mail) => {
      if (mail.to === failedRecipient) throw new Error("mock SMTP failure");
      return Promise.resolve({ accepted: [mail.to], rejected: [] });
    });
    const result = await getJson(await handler(createRequest()));

    assert.equal(result.status, 502);
    assert.equal(result.body.success, false);
    assert.equal(result.body.error.code, "EMAIL_DELIVERY_FAILED");
    assert.equal(JSON.stringify(logs).includes(validPayload.email), false);
  }
});

test("escapes user HTML while preserving the original text", async () => {
  const payload = {
    ...validPayload,
    name: "<script>alert(1)</script>",
    message: "<img src=x onerror=alert(1)> & genuine text",
  };
  const { handler, sentMail } = createHarness();
  const result = await getJson(await handler(createRequest(payload)));

  assert.equal(result.status, 200);
  assert.match(sentMail[0].html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.match(sentMail[0].html, /&lt;img src=x onerror=alert\(1\)&gt; &amp; genuine text/);
  assert.doesNotMatch(sentMail[0].html, /<script>|<img src=x/);
});

test("limits repeated requests from the same forwarded address", async () => {
  const { handler } = createHarness();
  const responses = [];
  for (let index = 0; index < 4; index += 1) {
    responses.push(await getJson(await handler(createRequest())));
  }

  assert.deepEqual(responses.map((response) => response.status), [200, 200, 200, 429]);
});

test("accepts same-origin requests and rejects missing or foreign origins", async () => {
  const { handler } = createHarness();
  const sameOrigin = await getJson(await handler(createRequest()));
  const missingOrigin = await getJson(
    await handler(createRequest(validPayload, { includeOrigin: false }))
  );
  const foreignOrigin = await getJson(
    await handler(createRequest(validPayload, { origin: "https://attacker.example" }))
  );

  assert.equal(sameOrigin.status, 200);
  assert.equal(missingOrigin.status, 403);
  assert.equal(foreignOrigin.status, 403);
});

test("rejects invalid phone data", async () => {
  const { handler, sentMail } = createHarness();
  const invalidPhone = await getJson(
    await handler(createRequest({
      ...validPayload,
      mobileNumber: "12345\r\nBcc:x@example.com",
    }))
  );

  assert.equal(invalidPhone.status, 400);
  assert.equal(sentMail.length, 0);
});