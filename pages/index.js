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

// const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KB Développement </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main className={outfit.className}>
        <Layout>
          <div className="h-max">
            <Hero />
          </div>
          <HeroTwo />
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
          <div className="h-[30vh] flex items-center">
            <div className=" bg-gradient-to-l from-g1 via-g1 to-g2 w-[80%] lg:h-[120px] rounded-r-full flex justify-center items-center px-10 gap-20">
              <Image
                src={"/assets/reaction.png"}
                height={344}
                width={550}
                className=" h-48 w-auto "
                alt="Emojis Reaction"
              />
              <h1 className="text-white text-xl font-bold">
                suivez-nous sur facebook et retrouvez toute l&apos;actualité de
                KB Développement
              </h1>
              <ArrowTopRightOnSquareIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
