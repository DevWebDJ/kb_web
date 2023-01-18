import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import alarme from "../../public/assets/alarme.json";

const Gps = () => {
  return (
    <>
      <Layout>
        <div className="relative z-0 py-10">
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-1/5 w-auto absolute left-0 hidden lg:block translate-y-1/2"
            alt="Bottom Dots"
          />
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-1/5 w-auto absolute right-0 hidden lg:block translate-y-3/4"
            alt="Bottom Dots"
          />
          <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div>
                  <h2 className="text-lg font-semibold text-primaryBlue uppercase text-center">
                    <Link href={"/services"}>Service</Link>
                  </h2>
                  <h3 className="mt-2 text-3xl text-center lg:text-5xl font-bold tracking-tight text-primaryBlue sm:text-4xl uppercase">
                    Installation système d&apos;alarme
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none text-center">
                    <p className="text-lg text-gray-500 lg:w-1/2 text-center mx-auto">
                      Vous cherchez à protéger votre maison ou votre entreprise
                      contre les incendies et les intrusions ? Nous avons la
                      solution pour vous !
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div className="mt-4 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie loop animationData={alarme} className=" lg:h-80 w-auto" />
                      <ul role="list" className="lg:w-1/2">
                        <li>
                          Nous proposons une large gamme de produits de
                          détection d&apos;incendie adaptés à tous vos besoins.
                          Nos solutions sont fiables et efficaces.
                        </li>
                        <li>
                          Pour sécuriser vos biens et prévenir les tentatives de
                          vol, nous vous proposons une solution
                          d&apos;anti-intrusion comprenant notamment des
                          détecteurs de mouvement et une installation sans fil.
                        </li>
                        <li>
                          Nous vous proposons également des solutions de
                          sécurité périmétrique pour renforcer le protocole de
                          sécurité de vos installations.
                        </li>
                      </ul>
                    </div>
                    <div className="mx-auto w-4/5 text-center">
                      <p>
                        N&apos;hésitez pas à nous contacter pour en savoir plus
                        sur nos produits et services de sécurité incendie et
                        anti-intrusion. Nous serons heureux de vous aider à
                        trouver les solutions qui conviennent le mieux à vos
                        besoins et à vos préoccupations.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-PBD px-5 py-2 text-sm font-medium leading-4 text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 hover:bg-primaryBlue"
                      >
                        Demander un Devis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Gps;
