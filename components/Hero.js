import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import arrow from "../public/assets/cta_arrow.json";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col py-2 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/assets/hero.jpg"
            alt="Hero"
            width={1000}
            height={667}
            priority
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-lg">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-primaryBlue uppercase">
              éditeur de solutions de Gestion et prestation informatique
            </p>
            <h2 className="mb-5 text-3xl font-black tracking-tight leading-9 sm:text-4xl sm:leading-none uppercase">
              Notre équipe met son savoir-faire à votre disposition
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-500 md:text-lg lg:text-justify">
              SARL KB Développement est une société spécialisée dans le
              développement de logiciels de gestion pour les entreprises. Nous
              proposons une large gamme de solutions adaptées aux besoins de
              chaque entreprise, ainsi que des prestations de services
              informatiques. Faites confiance à notre expertise pour améliorer
              la gestion de votre entreprise.
            </p>
            <Image
              src={"/assets/hero_zigzag.svg"}
              width={257}
              height={40}
              alt="Zigzag"
            />
            <div className="max-w-fit py-10">
              <div className="flex gap-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-9 py-2 text-sm font-medium leading-4 text-PBD hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2"
                >
                  <Link href={"/services"}>Nos Services</Link>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-PBD px-5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-PBD focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 animate-bounce hover:animate-none"
                >
                  <Link href={"/devis"}>Demander un Devis</Link>
                </button>
              </div>

              <Lottie
                loop
                animationData={arrow}
                className="-rotate-8 float-right  pt-1   w-1/4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
