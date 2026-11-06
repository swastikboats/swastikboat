const MAX_REQUEST_BODY_BYTES = 8192;
const MAX_REQUESTS_PER_WINDOW = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_RATE_LIMIT_ENTRIES = 1000;

const allowedFields = new Set([
  "name",
  "email",
  "countryCode",
  "mobileNumber",
  "boatInterest",
  "message",
]);

const countryCodes = new Set([
  "+1",
  "+44",
  "+91",
  "+61",
  "+33",
  "+49",
  "+39",
  "+86",
  "+81",
]);

const contactOptions = [
  "Sculling boats",
  "Carbon racing shell",
  "Professional rowing boat",
  "Double scull",
  "Single/Double scull trainer boat",
  "Juniors training boats",
  "Other",
  "General Inquiry",
  "Elite Scull Boat",
];

class RequestError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

function errorResponse(status, code, message) {
  return Response.json({ success: false, error: { code, message } }, { status });
}

async function readJsonBody(request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    throw new RequestError(415, "UNSUPPORTED_MEDIA_TYPE", "Send this request as JSON.");
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength !== null) {
    if (!/^\d+$/.test(contentLength)) {
      throw new RequestError(400, "INVALID_CONTENT_LENGTH", "The request could not be read.");
    }
    if (Number(contentLength) > MAX_REQUEST_BODY_BYTES) {
      throw new RequestError(413, "REQUEST_TOO_LARGE", "The request is too large.");
    }
  }

  if (!request.body) {
    throw new RequestError(400, "INVALID_JSON", "Provide a quote request.");
  }

  const reader = request.body.getReader();
  const chunks = [];
  let totalBytes = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BODY_BYTES) {
      await reader.cancel().catch(() => {});
      throw new RequestError(413, "REQUEST_TOO_LARGE", "The request is too large.");
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    throw new RequestError(400, "INVALID_JSON", "The request body must be valid JSON.");
  }
}

function validatePayload(body, validBoatOptions) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new RequestError(400, "INVALID_REQUEST", "Provide a valid quote request.");
  }
  if (Object.keys(body).some((field) => !allowedFields.has(field))) {
    throw new RequestError(400, "INVALID_REQUEST", "The request contains unsupported fields.");
  }

  const { name, email, countryCode, mobileNumber, boatInterest, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    (boatInterest !== undefined && typeof boatInterest !== "string")
  ) {
    throw new RequestError(400, "MISSING_REQUIRED_FIELDS", "Name and email are required.");
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanBoatInterest = (boatInterest || "").trim() || "General Inquiry";
  if (!cleanName || cleanName.length > 100 || /[\u0000-\u001f\u007f]/.test(cleanName)) {
    throw new RequestError(400, "INVALID_NAME", "Enter a valid name up to 100 characters.");
  }
  if (
    cleanEmail.length > 254 ||
    !/^[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i.test(cleanEmail)
  ) {
    throw new RequestError(400, "INVALID_EMAIL", "Enter a valid email address.");
  }
  if (!cleanBoatInterest || cleanBoatInterest.length > 120 || !validBoatOptions.has(cleanBoatInterest)) {
    throw new RequestError(400, "INVALID_BOAT_SELECTION", "Select a valid boat or enquiry type.");
  }

  if (countryCode !== undefined && typeof countryCode !== "string") {
    throw new RequestError(400, "INVALID_COUNTRY_CODE", "Select a valid country code.");
  }
  const cleanCountryCode = (countryCode || "").trim();
  if (cleanCountryCode && !countryCodes.has(cleanCountryCode)) {
    throw new RequestError(400, "INVALID_COUNTRY_CODE", "Select a valid country code.");
  }
  if (mobileNumber !== undefined && typeof mobileNumber !== "string") {
    throw new RequestError(400, "INVALID_PHONE", "Enter a valid phone number.");
  }
  const cleanMobileNumber = (mobileNumber || "").trim();
  const phoneDigits = (cleanMobileNumber.match(/[0-9]/g) || []).length;
  if (
    cleanMobileNumber.length > 25 ||
    (cleanMobileNumber &&
      (!/^\+?[0-9][0-9\s().-]*$/.test(cleanMobileNumber) ||
        phoneDigits < 6 || phoneDigits > 15 || !cleanCountryCode))
  ) {
    throw new RequestError(400, "INVALID_PHONE", "Enter a valid phone number and country code.");
  }
  if (message !== undefined && typeof message !== "string") {
    throw new RequestError(400, "INVALID_MESSAGE", "Enter a valid message.");
  }
  const cleanMessage = (message || "").trim();
  if (cleanMessage.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(cleanMessage)) {
    throw new RequestError(400, "INVALID_MESSAGE", "Your message must be 2000 characters or fewer.");
  }

  return {
    name: cleanName,
    email: cleanEmail,
    countryCode: cleanCountryCode,
    mobileNumber: cleanMobileNumber,
    boatInterest: cleanBoatInterest,
    message: cleanMessage,
  };
}

function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function consumeRateLimit(request, entries, now) {
  const forwardedFor = request.headers.get("x-forwarded-for") || "unknown";
  const key = forwardedFor.split(",")[0].trim().slice(0, 100) || "unknown";
  for (const [entryKey, entry] of entries) {
    if (now - entry.startTime >= RATE_LIMIT_WINDOW_MS) entries.delete(entryKey);
  }

  const entry = entries.get(key);
  if (entry && now - entry.startTime < RATE_LIMIT_WINDOW_MS) {
    if (entry.count >= MAX_REQUESTS_PER_WINDOW) return true;
    entry.count += 1;
    return false;
  }
  if (!entry && entries.size >= MAX_RATE_LIMIT_ENTRIES) {
    entries.delete(entries.keys().next().value);
  }
  entries.set(key, { count: 1, startTime: now });
  return false;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return replacements[character];
  });
}

function deliveryAccepted(result) {
  return result.status === "fulfilled" &&
    Array.isArray(result.value?.accepted) && result.value.accepted.length > 0 &&
    (!Array.isArray(result.value.rejected) || result.value.rejected.length === 0);
}

export function createQuotePostHandler({
  createTransport,
  emailUser,
  emailPass,
  adminEmail = "swastikboats@gmail.com",
  productTitles = [],
  logger = console,
  now = Date.now,
}) {
  const validBoatOptions = new Set([...productTitles, ...contactOptions]);
  const rateLimitEntries = new Map();

  return async function POST(request) {
    if (!isSameOrigin(request)) {
      return errorResponse(403, "ORIGIN_NOT_ALLOWED", "This request is not allowed.");
    }
    // Vercel isolates do not share this bounded, best-effort burst limit.
    if (consumeRateLimit(request, rateLimitEntries, now())) {
      return errorResponse(429, "RATE_LIMITED", "Too many requests. Please try again later.");
    }

    try {
      const payload = validatePayload(await readJsonBody(request), validBoatOptions);
      if (!emailUser || !emailPass || !adminEmail) {
        logger.error("Quote email delivery is not configured");
        return errorResponse(503, "EMAIL_UNAVAILABLE", "We could not send your request right now. Please try again later.");
      }

      let transporter;
      try {
        transporter = createTransport({
          service: "gmail",
          auth: { user: emailUser, pass: emailPass },
          connectionTimeout: 10_000,
          greetingTimeout: 10_000,
          socketTimeout: 20_000,
        });
      } catch {
        logger.error("Quote email transport initialization failed");
        return errorResponse(503, "EMAIL_UNAVAILABLE", "We could not send your request right now. Please try again later.");
      }

      const escapedName = escapeHtml(payload.name);
      const escapedEmail = escapeHtml(payload.email);
      const escapedBoatInterest = escapeHtml(payload.boatInterest);
      const escapedPhone = escapeHtml(
        payload.mobileNumber ? `${payload.countryCode} ${payload.mobileNumber}` : "Not provided"
      );
      const escapedMessage = escapeHtml(payload.message).replace(/\r?\n/g, "<br/>");

      const adminMailOptions = {
        from: emailUser,
        to: adminEmail,
        subject: `New Quote Request for ${payload.boatInterest}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1D26;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 10px; font-weight: bold; color: #0F172A;">Name:</td><td style="padding: 10px;">${escapedName}</td></tr>
            <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 10px; font-weight: bold; color: #0F172A;">Email:</td><td style="padding: 10px;"><a href="mailto:${escapedEmail}">${escapedEmail}</a></td></tr>
            <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 10px; font-weight: bold; color: #0F172A;">Phone:</td><td style="padding: 10px;">${escapedPhone}</td></tr>
            <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 10px; font-weight: bold; color: #0F172A;">Boat Interest:</td><td style="padding: 10px;">${escapedBoatInterest}</td></tr>
            ${payload.message ? `<tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 10px; font-weight: bold; color: #0F172A; vertical-align: top;">Message:</td><td style="padding: 10px;">${escapedMessage}</td></tr>` : ""}
          </table>
          <p style="color: #64748B; font-size: 12px;">This is an automated message from your Swastik Boats website.</p>
        </div>`,
      };

      const customerMailOptions = {
        from: emailUser,
        to: payload.email,
        subject: "We Received Your Quote Request — Swastik Boats",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1D26; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;"><h1 style="margin: 0;">Swastik Boats</h1></div>
          <h2 style="color: #0B1D26;">Thank You, ${escapedName}!</h2>
          <p style="color: #64748B; line-height: 1.6;">We've received your quote request for the <strong>${escapedBoatInterest}</strong>. Our team will review your request and get back to you within 24 hours.</p>
          <div style="background: #F3F6F8; padding: 15px; border-radius: 8px; margin: 20px 0;"><p style="margin: 0; color: #0F172A;"><strong>Your Request Details:</strong></p><p style="margin: 5px 0; color: #64748B;">Boat: ${escapedBoatInterest}</p><p style="margin: 5px 0; color: #64748B;">Contact: ${escapedEmail}</p></div>
          <p style="color: #64748B; font-size: 14px; line-height: 1.6;">If you have any urgent questions, feel free to reach out to us at <a href="mailto:swastikboats@gmail.com" style="color: #0ea5e9;">swastikboats@gmail.com</a></p>
          <p style="color: #64748B; margin-top: 30px; font-size: 12px; border-top: 1px solid #E2E8F0; padding-top: 15px;">Best regards,<br/><strong>Swastik Boats Team</strong></p>
        </div>`,
      };

      const results = await Promise.allSettled([
        Promise.resolve().then(() => transporter.sendMail(adminMailOptions)),
        Promise.resolve().then(() => transporter.sendMail(customerMailOptions)),
      ]);
      const adminDelivered = deliveryAccepted(results[0]);
      const customerDelivered = deliveryAccepted(results[1]);
      if (!adminDelivered || !customerDelivered) {
        logger.error("Quote email delivery failed", { adminDelivered, customerDelivered });
        return errorResponse(502, "EMAIL_DELIVERY_FAILED", "We could not complete your request right now. Please try again later.");
      }

      return Response.json(
        { success: true, message: "Quote request submitted successfully." },
        { status: 200 }
      );
    } catch (error) {
      if (error instanceof RequestError) {
        return errorResponse(error.status, error.code, error.message);
      }
      logger.error("Unexpected quote request processing failure");
      return errorResponse(500, "INTERNAL_ERROR", "We could not process your request right now. Please try again later.");
    }
  };
}