import {
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";
import { services } from "../data/constant";

const Cards = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 py-20 ">
      <div className="py-10">
        <div className="flex flex-col lg:flex-row items-center lg:gap-2 justify-center lg:justify-start">
          <InformationCircleIcon className="text-primaryBlue lg:w-12 lg:h-12 w-7 md:w-8" />
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center lg:text-left">
            {" "}
            Explorez ce que nous proposons
          </h1>
        </div>
        <p className="mt-4 text-lg text-gray-500 text-justify max-w-3xl px-6 lg:px-2">
          Notre entreprise, Sarl KB Développement, offre une large gamme de
          services informatiques allant de la conception de logiciels de gestion
          à l'installation et la maintenance de parcs informatiques, en passant
          par la prestation de services adaptés aux besoins de l'entreprise.
        </p>
      </div>
      <Swiper
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay]}
      >
        {services.map((item) => (
          <div className="">
            <SwiperSlide key={item.name}>
              {/* Overlapping cards */}
              <section
                className="relative z-10 mx-auto mt-10  px-4 sm:px-6 lg:px-8 select-none py-10"
                aria-labelledby="contact-heading"
              >
                <h2 className="sr-only" id="contact-heading">
                  Contact us
                </h2>
                <div className="h-96 grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 group ">
                  <div className="flex flex-col rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-100 delay-75 ease-in-out w-80 group-hover:translate-y-5 !text-gray-500">
                    <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                      <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gray-300 group-hover:bg-primaryBlue p-5 shadow-sm transition-all duration-150 delay-100 ease-in-out">
                        <item.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-medium group-hover:font-semibold group-hover:text-primaryBlue transition-all duration-100 delay-75 ease-in-out">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-base text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                      <a
                        href={item.href}
                        className="text-base font-medium text-primaryBlue hover:text-PBD "
                      >
                        <ArrowTopRightOnSquareIcon className="h-8 w-8 text-gray-500 group-hover:text-PBD mx-auto transition-all duration-100 delay-75 ease-in-out" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
