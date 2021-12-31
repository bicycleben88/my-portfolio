const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export default async function handler(req, res) {
  const info = await transporter.sendMail({
    from: "Ben Higginbotham's Portfolio <benny_boi@example.com>",
    to: "orders@example.com",
    subject: "Contact Form Confirmation",
    html: `<p>Thanks for sending me an email! I'll get back to you soon</p>`,
  })
  await res.json(info)
}
