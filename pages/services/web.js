import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import web from "../../public/assets/web.json";

import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
  tiers: [
    {
      title: "Site vitrine",
      price: "120 000",
      frequency: "DA",
      oldPrice: "150 000 DA",
      description:
        "Présentez votre entreprise de manière professionnelle avec notre offre de Site Vitrine !",
      features: [
        "Nom de domaine gratuit et personnalisé",
        "Performances optimales",
        "Conception UX personnalisée",
        "Intégration de votre charte graphique",
        "Édition complète de votre contenu",
        "Respect des normes du web et SEO",
        "Conseils et support technique de qualité",
      ],
      cta: "Demander un devis",
      mostPopular: true,
    },
    {
      title: "E-commerce",
      price: "200 000",
      frequency: "DA",
      oldPrice: "400 000 DA",
      description:
        "Boostez vos ventes en ligne avec notre offre de Site E-commerce !",
      features: [
        "Design moderne, responsive et UX adaptée",
        "Respect des normes du web et SEO",
        "Conseils et support technique de qualité",
        "Gestion des promotions et des codes promo",
        "Intégration de Facebook Pixel pour un suivi des conversions publicitaires",
        "Gestion avancée des produits et du stock",
        "Nom de domaine gratuit et personnalisé",
        "Gestion des commandes et des frais de livraison",
      ],
      cta: "Demander un devis",
      mostPopular: false,
    },
    {
      title: "Application Web sur mesure",
      price: "1200 k",
      frequency: "DA",
      oldPrice: "1600 k DA",
      description:
        "Améliorez l'expérience utilisateur avec notre offre d'Application Web !",
      features: [
        "Analyse des besoins de l'entreprise et des utilisateurs",
        "Conception UX/UI personnalisée",
        "Développement d'une application web sur mesure",
        "Intégration de fonctionnalités spécifiques à l'entreprise",
        "Intégration de systèmes tiers (API)",
        "Tests de qualité et d'assurance",
        "Déploiement et configuration de l'application web sur un environnement de production",
        "Formation des utilisateurs et documentation technique",
        "Maintenance et support technique",
        "Mises à jour régulières et évolution de l'application en fonction des besoins de l'entreprise",
      ],
      cta: "Demander un devis",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Web = () => {
  return (
    <>
      <Layout>
        <div className="relative z-0 py-10">
          <Image
            src={"/assets/topCircle.svg"}
            width={590}
            height={294}
            alt=""
            className="w-1/5 h-auto absolute top-0 right-0"
          />
          <Image
            src={"/assets/leftCircle.svg"}
            width={142}
            height={556}
            alt=""
            className="lg:h-2/5 w-auto md:h-1/6 h-[10%] absolute bottom-0 left-0 lg:-translate-x-9 -translate-x-14"
          />
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-70 md:h-24 w-auto absolute bottom-0 right-0 hidden lg:block -translate-y-5"
            alt="Bottom Dots"
          />
          <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl lg:py-16  px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                  <h2 className="text-lg font-semibold text-primaryBlue uppercase text-center">
                    <Link href={"/services"}>Service</Link>
                  </h2>
                  <h3 className="mt-2 text-3xl text-center lg:text-left lg:text-5xl font-bold tracking-tight text-primaryBlue  md:text-4xl uppercase">
                    Développement application web & site internet
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <Lottie loop animationData={web} className=" " />
                      </div>
                    </figure>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      Pourquoi est-il important d&apos;avoir un site internet
                      pour votre entreprise ? Voici quelques raisons :
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <ul role="list">
                      <li>
                        Avoir un site internet vous permet de montrer que vous
                        êtes une entreprise sérieuse et de inspirer confiance
                        auprès de vos clients potentiels. Selon une étude, 56%
                        des internautes n&apos;ont pas confiance dans les
                        entreprises qui n&apos;ont pas de site web.
                      </li>
                      <li>
                        Un site internet vous permet également de vous
                        positionner comme un expert dans votre domaine
                        d&apos;activité et d&apos;attirer l&apos;attention de
                        nouveaux visiteurs. Selon les statistiques, un site
                        internet peut vous permettre d&apos;attirer jusqu&apos;à
                        55% de visiteurs en plus.
                      </li>
                      <li>
                        Enfin, un site internet vous donne un moyen de maîtriser
                        votre communication en ligne et de présenter votre
                        entreprise de manière professionnelle.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl bg-white lg:py-24 px-4  md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900  md:text-5xl  leading-none lg:text-6xl">
            Créez votre présence en ligne avec nos offres
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-gray-500">
            Choisissez parmi nos offres abordables et surprenantes pour donner
            vie à votre présence en ligne, fidéliser votre clientèle et booster
            vos ventes. Une expérience utilisateur exceptionnelle vous attend !
          </p>

          {/* Tiers */}
          <div className="lg:mt-16 mt-5 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-primaryBlue py-1.5 px-4 text-sm font-semibold text-white">
                      Populaire
                    </p>
                  ) : null}
                  <span className=" text-gray-400 text-sm font-semibold">
                    À partir de
                  </span>
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      {tier.frequency}
                    </span>
                  </p>
                  <p className=" text-center md:text-left lg:text-right line-through font-semibold text-gray-400 text-lg ">
                    {tier.oldPrice}
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={"/devis"}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-primaryBlue text-white hover:bg-PBD"
                      : "bg-indigo-50 text-PBD hover:bg-indigo-100",
                    "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Web;
