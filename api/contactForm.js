const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

function generateContactEmail({ pictureBook, name }) {
  return `
    <div>
      <h2>Thank you for getting in Touch ${name}</h2>
      <p>I will get back to you as soon as I can</p>
        <ul>
          ${pictureBook
            .map(
              pic =>
                `<li>
                  <img src=${pic.image} alt=${pic.name} />
                </li>`
            )
            .join("")}
        </ul>
      <p>All the best,</p>
      <p>Ben</p>
      <style>
        ul {
          list-style: none;
        }
        img {
          width: 150px;
          height: 100px;
          object-fit: cover;
        }
      </style>
    </div>
  `
}

export default async function handler(req, res) {
  const body = req.body
  const requiredFields = ["name", "email", "role", "query"]
  const missingFields = []

  if (body.mapleSyrup) {
    res.status(400)
    res.json({ message: "error 10000" })
  }
  for (const field of requiredFields) {
    if (!body[field]) {
      missingFields.push(field)
    }
  }

  if (missingFields.length > 0) {
    res.status(400)
    res.json({
      message: `missing fields: ${missingFields.join(", ")}`,
    })
  }

  await transporter.sendMail({
    from: "Ben Higginbotham's Portfolio <benny_boi@example.com>",
    to: `${body.name} <${body.email}>, contact@example.com`,
    subject: "Contact Form Confirmation",
    html: generateContactEmail({
      pictureBook: body.pictureBook,
      name: body.name,
    }),
  })

  await res.status(200)
  await res.json({
    message: "Thanks for the email!",
  })
}
