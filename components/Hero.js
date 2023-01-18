import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import arrow from "../public/assets/cta_arrow.json";

const Hero = () => {
  return (
    <div className="lg:py-10 flex flex-col lg:flex-row-reverse lg:gap-32">
      <div className="relative flex justify-between flex-row lg:flex-row-reverse lg:gap-32 items-center lg:py-24 py-5">
        <Image
          src={"/assets/udots.svg"}
          width={243}
          height={174}
          className="lg:absolute lg:left-[50%] lg:top-2 lg:-z-10 w-1/3 lg:w-auto"
          alt="Udots"
        />
        <div className=" bg-heroimg bg-center flex md:block w-[60%] lg:w-[900px] lg:h-[460px] rounded-l-full overflow-hidden shadow-black shadow-[inset_0px_0px_23px_rgba(0,0,0,0.25)]">
          <div className="w-full h-full -z-10" />
          <Image
            src={"/assets/udots_bottom.svg"}
            width={243}
            height={174}
            className="absolute right-0 -mt-11  -z-10 hidden lg:block"
            alt="Bottom Dots"
          />
        </div>
      </div>

      <div className="flex flex-col lg:max-w-xl gap-y-6 justify-center items-center lg:items-start  px-1 md:px-10 lg:px-0">
        <div className="absolute">
          <Image
            src={"/assets/dots.svg"}
            width={200}
            height={143}
            className="relative lg:-left-[200%] -left-[198%] -top-36"
            alt="Dots"
          />
        </div>
        <div className="max-w-lg leading-9 flex flex-col gap-y-5 text-center lg:text-left">
          <h1 className=" text-xs md:text-sm text-primaryBlue uppercase font-medium">
            éditeur de solutions de Gestion et prestation informatique
          </h1>
          <h1 className=" text-3xl font-semibold leading-9">
            Notre équipe de professionnels met son savoir-faire à votre
            disposition
          </h1>
        </div>
        <p className="text-gray-500 text-center lg:text-left">
          SARL KB Développement est une société spécialisée dans le
          développement de logiciels de gestion pour les entreprises. Nous
          proposons une large gamme de solutions adaptées aux besoins de chaque
          entreprise, ainsi que des prestations de services informatiques.
          Faites confiance à notre expertise pour améliorer la gestion de votre
          entreprise.
        </p>
        <Image
          src={"/assets/hero_zigzag.svg"}
          width={257}
          height={40}
          alt="Zigzag"
        />

        <div className="max-w-fit">
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
              Demander un Devis
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
  );
};

export default Hero;
