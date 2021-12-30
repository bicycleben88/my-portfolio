const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "rhea.jacobs53@ethereal.email",
    pass: "RpaytsamWpPSfxeqk4",
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
