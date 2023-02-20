import { mailOptions, transporter } from "./transporter";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const test = `${data.fullName}`;
    const message = `
  Nom & Prénom : ${data.fullName}\r\n
  Nom de l'entreprise : ${data.entreprise}\r\n
  Adresse Mail : ${data.email}\r\n
  Numéro de téléphone : ${data.phone}\r\n
  Besoins : ${data.secteur}\r\n
  Secteur d'activité : ${data.activity}\r\n
  Besoin exprimé : ${data.besoin}\r\n
`;
    if (
      !data.fullName ||
      !data.entreprise ||
      !data.email ||
      !data.phone ||
      !data.secteur ||
      !data.activity ||
      !data.besoin
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Demande de devis - ${test}`,
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
