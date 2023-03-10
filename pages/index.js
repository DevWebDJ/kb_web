import Head from "next/head";
import Image from "next/image";
// import { Inter } from '@next/font/google'
import { Outfit } from "@next/font/google";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HeroTwo from "../components/HeroTwo";
import Cards from "../components/Cards";
import Clients from "../components/Clients";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Video from "../components/Video";
import Link from "next/link";
import CTA from "../components/CTA";
import { NextSeo } from "next-seo";

// const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NextSeo
        title="KB Développement"
        description="Le tout sous un même toit"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main className={outfit.className}>
        <Layout>
          <div className="h-max">
            <Hero />
          </div>
          <HeroTwo />
          <Video />
          <div className="">
            <Image
              src={"/assets/lineDots.svg"}
              height={90}
              width={500}
              className="absolute right-0"
              alt="Dots"
            />
            <Cards />
          </div>
          <Clients />
          <div className="lg:h-[30vh] py-14 lg:py-0 flex items-center">
            <Link
              href={"https://www.facebook.com/profile.php?id=100057631592030"}
              target={"_blank"}
              className="pr-1"
            >
              <div className=" bg-gradient-to-l from-g1 via-g1 to-g2 w-full lg:h-[120px] rounded-r-full flex md:justify-center justify-between items-center md:px-10 px-5 lg:gap-20 h-20">
                <Image
                  src={"/assets/reaction.png"}
                  height={344}
                  width={550}
                  className=" lg:h-48 w-auto h-16 md:h-28 "
                  alt="Emojis Reaction"
                />
                <h1 className="text-white lg:text-xl md:text-xs text-xs  font-bold flex-1">
                  suivez-nous sur facebook et retrouvez toute l&apos;actualité
                  de KB Développement
                </h1>
                <ArrowTopRightOnSquareIcon className="md:h-8 md:w-8 w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
          <CTA />
        </Layout>
      </main>
    </>
  );
}
