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

export const partners = [
  {
    name: "biscorima",
    src: "/assets/clients/biscorima.jpg",
  },
  {
    name: "bya",
    src: "/assets/clients/bya.jpg",
  },
  {
    name: "CCBO",
    src: "/assets/clients/CCBO.jpg",
  },
  {
    name: "cet",
    src: "/assets/clients/cet.jpg",
  },
  {
    name: "cherrak",
    src: "/assets/clients/cherrak.png",
  },
  {
    name: "cic",
    src: "/assets/clients/cic.jpg",
  },
  {
    name: "clinique_Tabet",
    src: "/assets/clients/clinique_Tabet.png",
  },
  {
    name: "dekinsan1",
    src: "/assets/clients/dekinsan.jpg",
  },
  {
    name: "dekinsan2",
    src: "/assets/clients/dekinsan.png",
  },
  {
    name: "eden",
    src: "/assets/clients/eden.jpg",
  },
  {
    name: "eden2",
    src: "/assets/clients/eden2.png",
  },
  {
    name: "eden3",
    src: "/assets/clients/eden3.jpg",
  },
  {
    name: "eden4",
    src: "/assets/clients/eden4.jpg",
  },
  {
    name: "evacc",
    src: "/assets/clients/evacc.jpg",
  },
  {
    name: "genepi",
    src: "/assets/clients/genepi.jpg",
  },
  {
    name: "liberte",
    src: "/assets/clients/liberte.jpg",
  },
  {
    name: "mekahli",
    src: "/assets/clients/mekahli.jpg",
  },
  {
    name: "mobis",
    src: "/assets/clients/mobis.jpg",
  },
  {
    name: "ouest",
    src: "/assets/clients/ouest.jpg",
  },
  {
    name: "ozgur",
    src: "/assets/clients/ozgur.jpg",
  },
  {
    name: "palais",
    src: "/assets/clients/palais.jpg",
  },
  {
    name: "petrogaz",
    src: "/assets/clients/petrogaz.png",
  },
  {
    name: "plaza",
    src: "/assets/clients/plaza.jpg",
  },
  {
    name: "sogema",
    src: "/assets/clients/sogema.png",
  },
  {
    name: "tabet",
    src: "/assets/clients/tabet.jpg",
  },
  {
    name: "tapino",
    src: "/assets/clients/tapino.jpg",
  },
  {
    name: "tayal",
    src: "/assets/clients/tayal.png",
  },
  {
    name: "unilab",
    src: "/assets/clients/unilab.jpg",
  },
];

export const softwareList = [
  {
    name: "Gestion Paie & Ressources humaines",
    desc: "un logiciel qui permet de gérer les salaires et les fiches de paie des employés, ainsi que d'autres aspects des ressources humaines, tels que la gestion des congés, des absences et des performances.",
    price: "80 000",
    features: [
      "Simulation Rappel",
      "CACOBATPH",
      "Frais de Mission",
      "Documents Joints",
      "Habilitations et port d'armes",
      "Dotation",
      "Suivi Recrutement",
    ],
  },
  {
    name: "Gestion de stock et Facturation",
    desc: "un logiciel qui permet de suivre les niveaux de stock d'une entreprise et de générer des factures pour les ventes. Il peut également aider à gérer les commandes, les livraisons et les retours de marchandise.",
    price: "120 000",
    features: [
      "Production",
      "Importation",
      "Distribution",
      "Suivi des emplacements",
      "Gestion des lots",
      "Gestion immobilisation",
      "Vente bois et dérivés",
      "Situation croisé (client fournisseur)",
      "Suivi échéancier (client fournisseur",
      "Situation des chauffeurs",
      "Traitement comptable",
      "Version multi-taxe",
      "Version Avancée (droits d'accès par dossier)",
      "Suivi bancaire et impression chèque",
      "Demande d'achat et note de frais",
      "Pont Bascule",
    ],
  },
  {
    name: "Comptabilité",
    desc: "un logiciel qui permet de gérer les finances d'une entreprise, notamment en effectuant des tâches telles que la tenue de livres comptables, la gestion des factures et des paiements, la gestion des budgets et la génération de rapports financiers.",
    price: "100 000",
    features: ["Rapprochement bancaire", "Analytique"],
  },
  {
    name: "Promotion Immobilière",
    desc: "un logiciel qui permet de gérer les projets immobiliers, y compris la gestion des propriétés, des ventes, des locations et des contrats.",
    price: "100 000",
    features: ["Licence Logiciel Promotion Immobilière"],
  },
  {
    name: "Gestion École",
    desc: "un logiciel qui permet de gérer les activités quotidiennes d'une école, notamment la gestion des étudiants, des enseignants, des horaires, des notes et des calendriers scolaires.",
    price: "100 000",
    features: ["Licence Gestion École"],
  },
  {
    name: "Gestion Clinique",
    desc: "un logiciel qui permet de gérer les opérations d'une clinique, notamment la gestion des patients, des rendez-vous, des dossiers médicaux et des facturations.",
    price: "120 000",
    features: [
      "Imagerie médicale",
      "Laboratoire",
      "Hospitalisation",
      "Facturation",
    ],
  },
  {
    name: "Gestion Cabinet Médical",
    desc: "un logiciel qui permet de gérer les opérations d'un cabinet médical, notamment la gestion des patients, des rendez-vous, des dossiers médicaux et des facturations.",
    price: "60 000",
    features: [
      "1 Poste supplémentaire gratuit + Licence Gestion Cabinet Médical",
    ],
  },
];
