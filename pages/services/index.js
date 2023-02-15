import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { services } from "../../data/constant";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Services = () => {
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
          <div>
            <div className="bg-white py-12">
              <div className="mx-auto max-w-7xl px-4  md:px-6 lg:px-8">
                <div className="lg:text-center">
                  <h2 className="text-lg font-semibold text-PBD">
                    Nos Services
                  </h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900  md:text-4xl">
                    KB Développement vous offre
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Tous les services informatiques dont vous avez besoin sous
                    un même toit.
                  </p>
                </div>

                <div className="mt-10">
                  <motion.dl
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
                  >
                    {services.map((feature) => (
                      <motion.div
                        variants={images}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={feature.name}
                        className="relative p-2 rounded-lg"
                      >
                        <Link href={feature.href}>
                          <dt>
                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primaryBlue text-white">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                              {feature.name}
                            </p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">
                            {feature.description}
                          </dd>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Services;
