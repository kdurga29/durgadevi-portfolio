import nodemailer from "nodemailer";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, subject, message } = req.body || {};

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }
        if (!isEmail(email)) {
            return res
                .status(400)
                .json({ error: "Enter a valid email address." });
        }

        // SMTP config from env
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: String(process.env.SMTP_SECURE || "false") === "true", // true for 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const to = process.env.CONTACT_TO; // your receiving email
        const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

        await transporter.sendMail({
            from: `"Portfolio Contact" <${from}>`,
            to,
            replyTo: email, // so you can reply directly to user
            subject: `Portfolio: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6">
                  <h2>New Portfolio Message</h2>
                  <p><b>Name:</b> ${escapeHtml(name)}</p>
                  <p><b>Email:</b> ${escapeHtml(email)}</p>
                  <p><b>Subject:</b> ${escapeHtml(subject)}</p>
                  <hr/>
                  <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
                </div>
            `,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Server error sending email. Try again later or email directly.",
        });
    }
}

// tiny sanitizer
function escapeHtml(str = "") {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
