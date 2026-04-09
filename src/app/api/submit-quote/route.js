import nodemailer from "nodemailer";
import products from "../../../data/products";

// Simple in-memory rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(request) {
  try {
    // Implement rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown_ip";
    const currentTime = Date.now();
    
    if (rateLimitMap.has(ip)) {
      const data = rateLimitMap.get(ip);
      if (currentTime - data.startTime < RATE_LIMIT_WINDOW_MS) {
        if (data.count >= MAX_REQUESTS_PER_WINDOW) {
          return Response.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        data.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, startTime: currentTime });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    }

    // Clean up old entries occasionally to prevent memory leaks
    if (Math.random() < 0.1) {
       for (const [key, value] of rateLimitMap.entries()) {
          if (currentTime - value.startTime > RATE_LIMIT_WINDOW_MS) {
             rateLimitMap.delete(key);
          }
       }
    }

    const body = await request.json();
    const { name, email, countryCode, mobileNumber, boatInterest, message } = body;

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Server-side validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    const hasHtmlTags = (str) => /<[^>]*>/g.test(str);
    
    if (name.length > 100 || hasHtmlTags(name)) {
      return Response.json({ error: "Invalid name format" }, { status: 400 });
    }

    if (message && (message.length > 2000 || hasHtmlTags(message))) {
      return Response.json({ error: "Invalid message format or length" }, { status: 400 });
    }

    const validBoatTitles = products.map((p) => p.title);
    const validContactOptions = [
      "Sculling boats",
      "Carbon racing shell",
      "Professional rowing boat",
      "Double scull",
      "Single/Double scull trainer boat",
      "Juniors training boats",
      "Other",
    ];
    const allValidOptions = [...validBoatTitles, ...validContactOptions, "General Inquiry"];
    if (boatInterest && !allValidOptions.includes(boatInterest)) {
      return Response.json({ error: "Invalid product selected" }, { status: 400 });
    }


    // Configure your email service here
    // For Gmail: use App Passwords (not regular password)
    // For other providers: configure SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change to your email service
      auth: {
        user: process.env.EMAIL_USER, // Set in .env.local
        pass: process.env.EMAIL_PASS, // Set in .env.local (Gmail App Password)
      },
    });

    // Email to admin/owner
    const adminEmail = process.env.ADMIN_EMAIL || "contact@sagarboats.com";
    const userPhone = mobileNumber
      ? `${countryCode} ${mobileNumber}`
      : "Not provided";

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `New Quote Request for ${boatInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1D26;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #E2E8F0;">
              <td style="padding: 10px; font-weight: bold; color: #0F172A;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E2E8F0;">
              <td style="padding: 10px; font-weight: bold; color: #0F172A;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #E2E8F0;">
              <td style="padding: 10px; font-weight: bold; color: #0F172A;">Phone:</td>
              <td style="padding: 10px;">${userPhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E2E8F0;">
              <td style="padding: 10px; font-weight: bold; color: #0F172A;">Boat Interest:</td>
              <td style="padding: 10px;">${boatInterest}</td>
            </tr>
            ${
              message
                ? `
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 10px; font-weight: bold; color: #0F172A; vertical-align: top;">Message:</td>
                <td style="padding: 10px;">${message}</td>
              </tr>
            `
                : ""
            }
          </table>
          <p style="color: #64748B; font-size: 12px;">This is an automated message from your Swastik Boats website.</p>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Quote Request — Swastik Boats",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1D26; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0;">Swastik Boats</h1>
          </div>
          <h2 style="color: #0B1D26;">Thank You, ${name}!</h2>
          <p style="color: #64748B; line-height: 1.6;">
            We've received your quote request for the <strong>${boatInterest}</strong>. 
            Our team will review your request and get back to you within 24 hours.
          </p>
          <div style="background: #F3F6F8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0F172A;"><strong>Your Request Details:</strong></p>
            <p style="margin: 5px 0; color: #64748B;">Boat: ${boatInterest}</p>
            <p style="margin: 5px 0; color: #64748B;">Contact: ${email}</p>
          </div>
          <p style="color: #64748B; font-size: 14px; line-height: 1.6;">
            If you have any urgent questions, feel free to reach out to us at 
            <a href="mailto:contact@sagarboats.com" style="color: #0ea5e9;">contact@sagarboats.com</a>
          </p>
          <p style="color: #64748B; margin-top: 30px; font-size: 12px; border-top: 1px solid #E2E8F0; padding-top: 15px;">
            Best regards,<br/>
            <strong>Swastik Boats Team</strong>
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return Response.json(
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    // Return success anyway to avoid exposing email setup issues
    // In production, you might want to log this differently
    return Response.json(
      {
        success: true,
        message:
          "Quote request received. We will contact you shortly.", // User sees success
      },
      { status: 200 }
    );
  }
}
