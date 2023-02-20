import React from "react";
import Layout from "../components/Layout";
import { CheckIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Pricing from "../components/Pricing";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Software = () => {
  return (
    <>
      <Layout>
        <div className="">
          <div className="h-[20vh] bg-gradient-to-r from-primaryBlue  to-transparent">
            <div className=" w-fit h-fit">
              <h1 className="absolute text-white mx-auto lg:text-6xl md:text-5xl text-4xl font-bold translate-y-full uppercase lg:translate-x-5">
                Nos Logiciels
              </h1>
            </div>
            <div className="relative h-full -z-10  ">
              <Image
                src={"/assets/work.jpg"}
                width={1920}
                height={729}
                alt="workers"
                className="h-full object-cover absolute blur-sm"
              />
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-50 via-white to-white">
            {/* Pricing section with single price and feature list */}
            <Pricing />
          </div>

          {/* Branded FAQ */}
          {/* <div className="bg-blue-900">
            <div className="mx-auto max-w-7xl py-16 px-4  md:py-24  md:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Frequently asked questions
              </h2>
              <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
                <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
                  {faqs.map((item) => (
                    <div key={item.id}>
                      <dt className="text-lg font-medium leading-6 text-white">
                        {item.question}
                      </dt>
                      <dd className="mt-2 text-base text-blue-200">
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div> */}

          {/* CTA section */}
          <CTA />
        </div>
      </Layout>
    </>
  );
};

export default Software;
