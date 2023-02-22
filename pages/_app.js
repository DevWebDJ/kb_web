import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import Loading from "../components/Loading";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <Fragment>
          <DefaultSeo
            title="KB développement"
            description="Logiciels, Solutions Web, Réseau, Caméra - Un seul partenaire.
            Création de site web, développement de plateforme web, développement d'application PWA, Système de géolocalisation (GPS), Installation caméra de surveillance, Installation système d'alarme, Installation de système de contrôle d'accès & pointeuse, Installation de réseaux informatiques (Fibre optique & cuivre), Maintenance du parc informatique, Installation de standard téléphonique & VOIP."
            openGraph={{
              type: "website",
              locale: "fr_FR",
              url: "https://kbdev.co",
              siteName: "KB développement",
            }}
          />
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <Loading />
      )}
    </>
  );
}
