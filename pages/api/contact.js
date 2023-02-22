import { mailOptions, transporter } from "./transporter";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const nom = `${data.fullName}`;
    const message = `
  <b>Nom & Prénom :</b> ${data.fullName}\r\n
  <b>Nom de l'entreprise :</b> ${data.entreprise}\r\n
  <b>Adresse Mail :</b> ${data.email}\r\n
  <b>Numéro de téléphone :</b> ${data.phone}\r\n
  <b>Besoins :</b> ${data.secteur}\r\n
  <b>Secteur d'activité :</b> ${data.activity}\r\n
  <b>Besoin exprimé :</b> ${data.besoin}\r\n
`;
    if (!data.fullName || !data.email || !data.phone || !data.secteur) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Demande de devis - ${nom}`,
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

// res.status(200).json({ success: true })
