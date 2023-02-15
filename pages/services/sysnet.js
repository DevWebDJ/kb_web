import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import info from "../../public/assets/info.json";
import screw from "../../public/assets/screw.json";
import server from "../../public/assets/server.json";
import network from "../../public/assets/network.json";

const Sysnet = () => {
  return (
    <>
      <Layout>
        <div className="relative z-0 py-10">
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className=" h-48 w-auto absolute left-0 hidden lg:block translate-y-1/2"
            alt="Bottom Dots"
          />
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="h-48 w-auto absolute right-0 hidden lg:block translate-y-3/4"
            alt="Bottom Dots"
          />
          <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl lg:py-16 px-4  md:px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div>
                  <h2 className="text-lg font-semibold text-primaryBlue uppercase text-center">
                    <Link href={"/services"}>Service</Link>
                  </h2>
                  <h3 className="mt-2 text-3xl text-center lg:text-5xl font-bold tracking-tight text-primaryBlue  md:text-4xl uppercase">
                    Installation de réseaux informatiques (Fibre optique &
                    cuivre)
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-1 lg:gap-8 place-content-center justify-items-center">
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none text-center">
                    <p className="text-lg text-gray-500 lg:w-3/4 text-center mx-auto">
                      KB Développement vous accompagne à chaque étape
                      d&apos;installation de votre réseau informatique en vous
                      proposant des solutions en fonction de vos besoins et de
                      vos locaux, pour vous permettre ainsi de vous consacrer
                      entièrement à votre cœur de métier et d&apos;améliorer les
                      performances de votre système d&apos;informations
                      indispensable à la productivité de votre entreprise.
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div className="mt-4 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={info}
                        className=" lg:h-20 w-auto"
                      />
                      <p className="lg:w-1/2">
                        Définir vos besoins Avant de procéder à
                        l&apos;installation d&apos;un réseau, un technicien se
                        déplace dans vos locaux, pour vous conseiller sur le
                        choix de votre architecture réseau et les équipements,
                        réseau câblé ou réseau sans fil, et procède ainsi à
                        l&apos;achat du matériel selon le budget prévisionnel du
                        client.
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={screw}
                        className=" lg:h-24 lg:-mr-5 lg:-translate-x-2 w-auto"
                      />
                      <p className="lg:w-1/2">
                        Installation des câbles Relier les ordinateurs entre eux
                        à partir d&apos;un serveur unique, en mettant en place
                        un réseau de câbles, de goulottes, serti des prises
                        RJ45, installation d&apos;une baie de brassage.
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={server}
                        className=" lg:h-52 md:h-72 lg:-mr-32 lg:-translate-x-10  w-auto"
                      />
                      <p className="lg:w-1/2">
                        Installation de serveur Installation de serveur pour
                        absorber les besoins de l&apos;entreprise. Le serveur
                        peut fonctionner sous Windows ou Linux.
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10">
                      <Lottie
                        loop
                        animationData={network}
                        className=" lg:h-64  w-auto"
                      />
                      <p className="lg:w-1/2">
                        Installation des commutateurs réseaux Il s&apos;agit de
                        lier le serveur et les équipements informatiques par le
                        biais de commutateurs réseaux qui répartissent les
                        données au sein du réseau de manière structurée. Les
                        commutateurs réseau ou Switch seront également
                        déterminés en fonction des caractéristiques des serveurs
                      </p>
                    </div>
                    <div className="mx-auto w-4/5 text-center">
                    <button>
                        <Link
                          href="/devis"
                          className="no-underline inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-PBD"
                        >
                          Demander un Devis
                        </Link>
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

export default Sysnet;
