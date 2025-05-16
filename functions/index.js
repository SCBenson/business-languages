const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

// Get environment variables from Firebase config
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const SMTP_HOST = functions.config().smtp.host;
const SMTP_PORT = functions.config().smtp.port;
const SMTP_SECURE = functions.config().smtp.secure;
const SMTP_USER = functions.config().smtp.user;
const SMTP_PASS = functions.config().smtp.pass;
const FROM_EMAIL = functions.config().email.from;
const TO_EMAIL = functions.config().email.to;
// Configure SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

// Create SendGrid transport for Nodemailer
const sendGridTransport = {
  auth: {
    api_key: SENDGRID_API_KEY,
  },
};

// Create fallback SMTP transport for Nodemailer
const smtpTransport = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Email sending function
exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Check if method is POST
    if (req.method !== "POST") {
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    try {
      const { firstName, lastName, email, description } = req.body;

      // Validate input
      if (!firstName || !lastName || !email || !description) {
        return res.status(400).send({ error: "Missing required fields" });
      }

      // Email content
      const mailOptions = {
        from: `Business Languages Website <${process.env.FROM_EMAIL}>`,
        to: process.env.TO_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${description}
        `,
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${description}</p>
        `,
      };

      let emailSent = false;

      // Try SendGrid first
      try {
        const msg = {
          to: process.env.TO_EMAIL,
          from: process.env.FROM_EMAIL,
          subject: mailOptions.subject,
          text: mailOptions.text,
          html: mailOptions.html,
          replyTo: email,
        };

        await sgMail.send(msg);
        emailSent = true;
      } catch (sgError) {
        console.error("SendGrid error:", sgError);

        // Fall back to Nodemailer with SMTP
        try {
          const transporter = nodemailer.createTransport(smtpTransport);
          await transporter.sendMail(mailOptions);
          emailSent = true;
        } catch (nmError) {
          console.error("Nodemailer error:", nmError);
          throw new Error("Failed to send email through all methods");
        }
      }

      if (emailSent) {
        return res
          .status(200)
          .send({ success: true, message: "Email sent successfully" });
      } else {
        throw new Error("Email sending failed without throwing an error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).send({
        error: "Internal Server Error",
        message: "Failed to send email",
      });
    }
  });
});

// Confirmation email to sender function (optional)
exports.sendConfirmation = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Similar implementation as above but sending to the person who submitted the form
    // This can be called separately or combined with the sendEmail function

    if (req.method !== "POST") {
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    try {
      const { firstName, email } = req.body;

      if (!firstName || !email) {
        return res.status(400).send({ error: "Missing required fields" });
      }

      const mailOptions = {
        from: `Business Languages <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: "Thank you for contacting Business Languages",
        text: `
Dear ${firstName},

Thank you for contacting Business Languages. We have received your message and will get back to you as soon as possible.

Best regards,
The Business Languages Team
        `,
        html: `
<h2>Thank you for contacting Business Languages</h2>
<p>Dear ${firstName},</p>
<p>Thank you for contacting Business Languages. We have received your message and will get back to you as soon as possible.</p>
<p>Best regards,<br>The Business Languages Team</p>
        `,
      };

      // Send using SendGrid
      const msg = {
        to: email,
        from: process.env.FROM_EMAIL,
        subject: mailOptions.subject,
        text: mailOptions.text,
        html: mailOptions.html,
      };

      await sgMail.send(msg);
      return res
        .status(200)
        .send({ success: true, message: "Confirmation email sent" });
    } catch (error) {
      console.error("Error sending confirmation:", error);
      return res
        .status(500)
        .send({ error: "Failed to send confirmation email" });
    }
  });
});
