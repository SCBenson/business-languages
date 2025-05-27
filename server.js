import express from "express";
import sgMail from "@sendgrid/mail";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send-email", async (req, res) => {
  try {
    const { to, subject, text, html, senderName, senderEmail } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({
        error: "Missing required fields: to, subject, and text are required",
      });
    }

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: subject,
      text: text,
      html: html || `<p>${text.replace(/\n/g, "<br>")}</p>`,
      replyTo: senderEmail,
    };
    console.log("Sending email to:", to);
    console.log("Subject:", subject);

    await sgMail.send(msg);
    console.log("Email sent successfully");

    res.status(200).json({
      message: "Email sent successfully",
      recipient: to,
    });
  } catch (error) {
    console.error("SendGrid error:", error);
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
  });
});

app.get("/api/test-config", (req, res) => {
  res.json({
    hasApiKey: !!process.env.SENDGRID_API_KEY,
    hasFromEmail: !!process.env.SENDGRID_FROM_EMAIL,
    fromEmail: process.env.SENDGRID_FROM_EMAIL || "Not configured",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
  console.log(`SendGrid configured: ${!!process.env.SENDGRID_API_KEY}`);
  console.log(
    `From email: ${process.env.SENDGRID_FROM_EMAIL || "Not configured"}`
  );
});
