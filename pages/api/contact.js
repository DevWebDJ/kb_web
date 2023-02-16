import { mailOptions, transporter } from "./transporter";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const message = `
  Nom: ${data.nom}\r\n
  Prénom: ${data.prenom}\r\n
  Email: ${data.email}\r\n
  Téléphone: ${data.phone}\r\n
  Nationalité: ${data.nationality}\r\n
  Service: ${data.service}\r\n
  Wilaya: ${data.wilaya}\r\n
  Commentaire: ${data.comment}
`;
    if (
      !data.nom ||
      !data.prenom ||
      !data.phone ||
      !data.nationality ||
      !data.wilaya
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Nouveau Rendez-Vous!",
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
