import { mailOptions, transporter } from './transporter'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    const message = `
  fullName: ${data.fullName}\r\n
  Email: ${data.email}\r\n
 Phone: ${data.phone}\r\n
  Secteur: ${data.secteur}\r\n
 Activity: ${data.activity}\r\n,
    Besoin: ${data.besoin}\r\n,
`
    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.secteur ||
      !data.activity ||
      !data.besoin
    ) {
      return res.status(400).json({ message: 'Bad request' })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Nouveau Rendez-Vous!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}

export default handler
