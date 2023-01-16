import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

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
            className="h-1/5 w-auto absolute bottom-0 right-0 hidden lg:block -translate-y-5"
            alt="Bottom Dots"
          />
          <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                  <h2 className="text-lg font-semibold text-primaryBlue uppercase">
                    Service
                  </h2>
                  <h3 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Développement application web & site internet
                  </h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <img
                          className="rounded-lg object-cover object-center shadow-lg"
                          src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                          alt="Whitney leaning against a railing on a downtown street"
                          width={1184}
                          height={1376}
                        />
                      </div>
                      <figcaption className="mt-3 flex text-sm text-gray-500">
                        <CameraIcon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2">
                          Photograph by Marcus O’Leary
                        </span>
                      </figcaption>
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
      </Layout>
    </>
  );
};

export default Web;
