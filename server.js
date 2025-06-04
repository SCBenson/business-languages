import express from "express";
import sgMail from "@sendgrid/mail";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const SENDGRID_FROM_EMAIL = "letusresumework@gmail.com";

sgMail.setApiKey(SENDGRID_API_KEY);

app.post("/api/send-email", async (req, res) => {
  try {
    const { subject, text, html, senderName, senderEmail } = req.body;

    console.log("📧 Email request received:", {
      subject,
      senderName,
      senderEmail,
    });

    // Only validate subject and text since we're hardcoding the recipient
    if (!subject || !text || !senderEmail) {
      return res.status(400).json({
        error: "Missing required fields: to, subject, and text are required",
      });
    }

    const msg = {
      to: "letusresumework@gmail.com", // Hardcoded recipient
      from: {
        email: SENDGRID_FROM_EMAIL,
        name: senderName || "Contact Form",
      },
      subject: subject,
      text: text,
      html: html || `<p>${text.replace(/\n/g, "<br>")}</p>`,
      replyTo: {
        email: senderEmail,
        name: senderName || "Contact Form Sender",
      },
    };

    console.log("Sending email to: letusresumework@gmail.com");
    console.log("From:", SENDGRID_FROM_EMAIL);
    console.log("Reply-To:", senderEmail);
    console.log("Subject:", subject);

    await sgMail.send(msg);
    console.log("✅ Email sent successfully");

    res.status(200).json({
      message: "Email sent successfully",
      recipient: "letusresumework@gmail.com",
    });
  } catch (error) {
    console.error("❌ SendGrid error:", error);
    if (error.response) {
      console.error("SendGrid response:", error.response.body);
      return res.status(500).json({
        error: "Failed to send email",
        details: error.response.body.errors || error.message,
      });
    }

    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
    sendgridConfigured: !!SENDGRID_API_KEY,
  });
});

app.get("/api/test-config", (req, res) => {
  res.json({
    hasApiKey: !!SENDGRID_API_KEY,
    hasFromEmail: !!SENDGRID_FROM_EMAIL,
    fromEmail: SENDGRID_FROM_EMAIL || "Not configured",
    apiKeyValid: SENDGRID_API_KEY?.startsWith("SG.") || false,
  });
});

app.post("/api/test-sendgrid", async (req, res) => {
  try {
    console.log("🧪 Testing SendGrid configuration...");

    const msg = {
      to: "letusresumework@gmail.com",
      from: SENDGRID_FROM_EMAIL,
      subject: "SendGrid Test - " + new Date().toISOString(),
      text: "This is a test email to verify SendGrid is working correctly.",
      html:
        "<h3>SendGrid Test</h3><p>This is a test email to verify SendGrid is working correctly.</p><p>Sent at: " +
        new Date().toISOString() +
        "</p>",
    };

    console.log("Test message:", msg);

    const result = await sgMail.send(msg);
    console.log("✅ SendGrid test successful:", result);

    res.status(200).json({
      message: "Test email sent successfully",
      messageId: result[0].headers?.["x-message-id"] || "Unknown",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ SendGrid test failed:", error);
    if (error.response) {
      console.error("SendGrid response:", error.response.body);
    }

    res.status(500).json({
      error: "SendGrid test failed",
      details: error.response?.body || error.message,
      code: error.code,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Email server running on http://localhost:${PORT}`);
  console.log(`📧 SendGrid configured: ${!!SENDGRID_API_KEY}`);
  console.log(`📨 From email: ${SENDGRID_FROM_EMAIL || "Not configured"}`);
  console.log(`📬 All emails will be sent to: letusresumework@gmail.com`);
});
