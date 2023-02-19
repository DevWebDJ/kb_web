const nodemailer = require('nodemailer')

const username = process.env.CPANEL_WEBMAIL_USERNAME
const password = process.env.CPANEL_WEBMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: username,
    pass: password,
  },
})

export const mailOptions = {
  from: username,
  to: username,
}
