import {
  PhoneIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  MapPinIcon,
  VideoCameraIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export const services = [
  {
    name: "Développement application web & site internet",
    description:
      "Création de sites web et d'applications sur mesure pour les entreprises.",
    href: "/services/web",
    icon: GlobeAltIcon,
  },
  {
    name: "Système de géolocalisation (GPS)",
    description:
      "Suivi en temps réel de la localisation via GPS pour une utilisation professionnelle ou personnelle.",
    href: "/services/gps",
    icon: MapPinIcon,
  },
  {
    name: "Installation caméra de surveillance",
    description:
      "Caméras de surveillance pour protéger les lieux privés et professionnels.",
    href: "/services/camera",
    icon: VideoCameraIcon,
  },
  {
    name: "Installation système d'alarme",
    description:
      "Installation de systèmes d'alarme pour une sécurité maximale.",
    href: "/services/alarme",
    icon: ShieldCheckIcon,
  },
  {
    name: "Installation de système de contrôle d'accès & pointeuse",
    description:
      "Installation de systèmes de contrôle d'accès et de pointeuse pour la gestion des employés et la sécurité des locaux.",
    href: "/services/accessControl",
    icon: FingerPrintIcon,
  },
  {
    name: "Installation de réseaux informatiques (Fibre optique & cuivre)",
    description:
      "Installation de systèmes de contrôle d'accès et de pointeuse pour la gestion des employés et la sécurité des locaux.",
    href: "/services/sysnet",
    icon: ServerStackIcon,
  },
  {
    name: "Maintenance du parc informatique",
    description:
      "Installation de systèmes de contrôle d'accès et de pointeuse pour la gestion des employés et la sécurité des locaux.",
    href: "/services/maintenance",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Installation de standard téléphonique & VOIP",
    description:
      "Installation de systèmes de contrôle d'accès et de pointeuse pour la gestion des employés et la sécurité des locaux.",
    href: "/services/voip",
    icon: PhoneIcon,
  },
];
