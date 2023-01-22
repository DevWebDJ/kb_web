import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import Teamwork from "/public/assets/teamwork.json";
import { motion } from "framer-motion";

const HeroTwo = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <Image
        src={"/assets/dots.svg"}
        width={200}
        height={143}
        className="absolute -left-14 hidden lg:block"
        alt="Dots"
      />
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <Image
                src={"/assets/zigzag.svg"}
                height={29}
                width={394}
                className=" rotate-90 w-5 absolute top-0 right-1/3 -scale-x-100"
                alt="Zigzag"
              />
              <div className="mt-6">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center lg:text-left">
                  Notre{" "}
                  <span className="text-primaryBlue font-black">Force</span>{" "}
                  c&apos;est notre{" "}
                  <span className="text-primaryBlue font-black">
                    Savoir-Faire
                  </span>
                </h2>
                <p className="mt-4 text-lg text-gray-500 text-justify">
                  KB Développement a déjà aidé plus de 1000 clients grâce à
                  l&apos;expertise de son équipe et sa détermination à trouver
                  la solution adaptée aux besoins de ses clients, quels que
                  soient leur secteur d&apos;activité (commerce, industrie,
                  hôpitaux, institutions, etc.). Nous sommes fiers de pouvoir
                  apporter notre contribution à leur réussite.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: -50 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Lottie
              loop
              animationData={Teamwork}
              className="lg:w-full w-1/2 "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
