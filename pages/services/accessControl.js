import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import access from "../../public/assets/access.json";

const Camera = () => {
  return (
    <>
      <Layout>
        <div className="relative z-0 py-10">
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-48 md:h-24 w-auto absolute left-0 hidden lg:block translate-y-1/2"
            alt="Bottom Dots"
          />
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-48 md:h-24 w-auto absolute right-0 hidden lg:block translate-y-3/4"
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
                    Installation de système de contrôle d&apos;accès & pointeuse
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none text-center">
                    <p className="text-lg text-gray-500 lg:w-1/2 text-center mx-auto">
                      Vous cherchez un système de pointage/contrôle d&apos;accès
                      adapté à votre entreprise ou organisation (hôtel,
                      promotion immobilière, banque, etc.) ? Nous avons ce
                      qu&apos;il vous faut !
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div className="mt-4 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={access}
                        className=" lg:h-72 lg:translate-y-8 translate-y-5 w-auto"
                      />
                      <p className="lg:w-1/2">
                        Nos systèmes de pointage de marques performants vous
                        permettent de calculer et d&apos;optimiser les temps de
                        présence et d&apos;absence de vos salariés et agents, et
                        de restreindre l&apos;accès à certaines zones via des
                        digicodes, lecteurs de badges et serrures électriques.
                      </p>
                    </div>
                    <div className="mx-auto w-4/5 text-center">
                      <p>
                        Notre équipe est à votre disposition pour vous proposer
                        une solution adaptée à vos besoins. N&apos;hésitez pas à
                        nous contacter pour en savoir plus sur nos systèmes de
                        pointage/contrôle d&apos;accès et sur les services que
                        nous proposons.
                      </p>
                      <p>
                        Nous serons heureux de répondre à vos questions et de
                        vous aider à trouver la solution qui convient le mieux à
                        votre entreprise ou organisation.
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

export default Camera;
