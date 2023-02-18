import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import { partners } from "../data/constant";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const numbers = useMotionValue(1);
  const roundedYear = useTransform(numbers, (latest) => Math.round(latest));
  useEffect(() => {
    const animation = animate(numbers, 1000, { duration: 6 });
  });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4  md:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <motion.h2 className="text-3xl font-bold tracking-tight text-gray-900  md:text-4xl uppercase">
              plus de{" "}
              <motion.span ref={ref} className="font-black text-primaryBlue">
                {roundedYear}
              </motion.span>{" "}
              clients nous font confiance
            </motion.h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 pb-5">
              Nous remplissons les objectifs que nos clients nous ont fixés avec
              la même exigence, et nous veillons à les satisfaire et a créer une
              relation de confiance pour travailler avec chacun d&apos;eux sur
              le long terme
            </p>
            <div className="max-w-fit">
              <div className="flex gap-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-9 py-2 text-sm font-medium leading-4 text-PBD hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2"
                >
                  Nos logiciels
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-PBD px-5 py-2 text-sm font-medium leading-4 text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-offset-2 hover:bg-primaryBlue"
                >
                  <Link href={"/devis"}>Demander un Devis</Link>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 lg:grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 hidden">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src="" alt="Workcation" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div> */}

          <div className="py-4">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              grabCursor={true}
              speed={1000}
              a11y={false}
              autoplay={{
                delay: 0,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {partners.map((clients, index) => {
                return (
                  <>
                    <SwiperSlide>
                      <div
                        key={index}
                        className="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
                      >
                        <img
                          className="max-h-24"
                          src={clients.src}
                          alt={clients.name}
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
