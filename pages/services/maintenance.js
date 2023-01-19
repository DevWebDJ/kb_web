import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import screw from "../../public/assets/screw.json";

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
                    Maintenance du parc informatique
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none text-center">
                    <p className="text-lg text-gray-500 lg:w-1/2 text-center mx-auto">
                      La complexité des réseaux, des logiciels et du matériel
                      informatique requiert bien souvent un service de
                      maintenance, c’est pourquoi KB Développement assure la
                      maintenance de parc informatique pour toutes les
                      entreprises désirant bénéficier du service.
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div className="mt-4 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={screw}
                        className=" lg:h-48 lg:-mr-7 lg:-translate-x-4 w-auto"
                      />
                      <p className="lg:w-1/2">
                        Afin de solutionner une panne, les techniciens de KB
                        Développement interviennent très rapidement pour ne pas
                        ralentir l’activité de votre entreprise.
                      </p>
                    </div>

                    <div className="mx-auto w-4/5 text-center">
                      <p>
                        Une maintenance efficace doit réunir habilement deux
                        approches matérielle et logicielle et concerne la
                        restauration de fichiers, la récupération de fichiers
                        effacés, l’installation d’un Anti-Virus, la réparation
                        d’un ordinateur, d’une imprimante…
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
