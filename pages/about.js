import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Banner from "../components/Banner";

const About = () => {
  const today = new Date();
  const Year = today.getFullYear();
  const Exp = Year - 2008;
  const BackYear = Year - Exp;
  const countYear = useMotionValue(Year);
  const countExp = useMotionValue(1);
  const roundedYear = useTransform(countYear, (latest) => Math.round(latest));
  const roundedExp = useTransform(countExp, (latest) => Math.round(latest));
  useEffect(() => {
    const animation = animate(countYear, BackYear, { duration: 3 });
    const animationExp = animate(countExp, Exp, { duration: 3 });

    return () => {
      animation.stop;
      animationExp.stop;
    };
  });
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  return (
    <>
      <Layout>
        <Banner />
        <div className="relative bg-white pb-16  md:pb-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative  py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden  md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4  md:max-w-3xl  md:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <Image
                    width={404}
                    height={392}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    src={"/assets/1.jpg"}
                    alt="test"
                  />
                  <div className="absolute inset-0 bg-primaryBlue/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-PBD  opacity-90" />
                  <div className="relative px-8">
                    <div>
                      <span className="flex text-white font-bold items-center gap-1">
                        <Image
                          src={"/favicon_Dtheme.svg"}
                          height={200}
                          width={200}
                          alt="KB"
                          className="h-10 w-auto"
                        />
                        &nbsp;D??veloppement&nbsp;
                      </span>
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative text-justify">
                          une ??quipe passionn??e de professionnels hautement
                          qualifi??s, qui se consacrent ?? fournir des solutions
                          technologiques innovantes pour r??pondre aux besoins de
                          nos clients. Nous sommes fiers de notre engagement
                          envers la qualit?? et la satisfaction du client, et
                          nous nous effor??ons constamment d&apos;aller au-del??
                          des attentes.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-indigo-200">
                          Yacine Bousmaha - Directeur KB D??veloppement
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4  md:max-w-3xl  md:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-0  md:pt-16 lg:pt-20">
                <h2 className="text-4xl font-black tracking-tight text-gray-900  md:text-4xl uppercase">
                  Plus qu&apos;une entreprise
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Chez KB D??veloppement, nous sommes convaincus que chaque
                    entreprise a des besoins informatiques sp??cifiques qui
                    doivent ??tre pris en compte pour garantir un fonctionnement
                    optimal et une croissance durable. C&apos;est pourquoi nous
                    avons adopt?? une approche sur mesure, qui nous permet de
                    comprendre parfaitement les exigences de nos clients et de
                    leur proposer des solutions informatiques personnalis??es et
                    adapt??es.
                  </p>
                  <p className="text-base leading-7">
                    Notre expertise s&apos;??tend ?? tous les domaines de
                    l&apos;informatique : du d??veloppement de logiciels ?? la
                    gestion de r??seaux, en passant par la s??curit?? des donn??es
                    et la formation des utilisateurs. Nous sommes en mesure de
                    g??rer des projets de toutes tailles et de toutes
                    complexit??s, et nous nous engageons ?? vous offrir un service
                    complet et professionnel ?? chaque ??tape du processus.
                  </p>
                  <p className="text-base leading-7">
                    Mais ce qui fait r??ellement la diff??rence chez KB
                    D??veloppement, c&apos;est notre ??quipe de professionnels
                    qualifi??s et passionn??s. Chacun de nos collaborateurs est un
                    expert dans son domaine, dot?? d&apos;une solide exp??rience
                    et d&apos;une connaissance approfondie des derni??res
                    tendances et des technologies ??mergentes. Nous sommes fiers
                    de travailler avec des personnes talentueuses et engag??es,
                    qui sont toujours pr??tes ?? aller plus loin pour satisfaire
                    les besoins de nos clients. En choisissant KB D??veloppement
                    pour vos besoins informatiques, vous pouvez ??tre s??r de
                    b??n??ficier d&apos;un service de qualit?? sup??rieure et
                    d&apos;une r??activit?? maximale en cas de probl??me.
                  </p>
                  <p className="text-base leading-7">
                    Nous sommes ?? l&apos;??coute de nos clients et nous nous
                    engageons ?? r??pondre rapidement ?? toutes les demandes, afin
                    de minimiser les temps d&apos;arr??t et de maximiser la
                    productivit?? de votre entreprise. Alors n&apos;h??sitez plus
                    : confiez-nous vos projets informatiques et laissez-nous
                    vous aider ?? atteindre vos objectifs commerciaux. Chez KB
                    D??veloppement, nous sommes l?? pour vous accompagner ?? chaque
                    ??tape de votre croissance.
                  </p>
                </div>
              </div>

              {/* Stats section */}
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {/* TEST  */}
                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">
                      Fond??e
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">
                      <motion.h1>{roundedYear}</motion.h1>
                    </dd>
                  </div>
                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">
                      Exp??rience Acquise
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900 flex gap-3">
                      <motion.h1>{roundedExp}</motion.h1>
                      <span>Ans</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="overflow-clip  rounded-xl -translate-y-36 w-11/12 rotate-6 flex justify-center">
          <motion.div className="h-[20dvh] flex justify-center items-center overflow-hidden bg-gray-300 w-[120vw] ">
            <motion.h1
              style={{
                x: x,
              }}
              className="text-6xl uppercase font-bold w-full whitespace-nowrap stroke-black  text-white flex gap-36"
            >
              <span className="flex">
                <Image
                  src={"/favicon_Dtheme.svg"}
                  height={200}
                  width={200}
                  alt="KB"
                  className="h-20 w-auto"
                />
                &nbsp;D??veloppement&nbsp;
              </span>
              <span className="flex">
                <Image
                  src={"/favicon_Dtheme.svg"}
                  height={200}
                  width={200}
                  alt="KB"
                  className="h-20 w-auto"
                />
                &nbsp;D??veloppement&nbsp;
              </span>
              <span className="flex">
                <Image
                  src={"/favicon_Dtheme.svg"}
                  height={200}
                  width={200}
                  alt="KB"
                  className="h-20 w-auto"
                />
                &nbsp;D??veloppement&nbsp;
              </span>
              <span className="flex">
                <Image
                  src={"/favicon_Dtheme.svg"}
                  height={200}
                  width={200}
                  alt="KB"
                  className="h-20 w-auto"
                />
                &nbsp;D??veloppement&nbsp;
              </span>
            </motion.h1>
          </motion.div>
        </div> */}
      </Layout>
    </>
  );
};

export default About;
