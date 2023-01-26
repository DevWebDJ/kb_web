import React, { Fragment, useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Layout from "../components/Layout";
import { services } from "../data/constant";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Lottie from "lottie-react";
import waving from "../public/assets/waving.json";

const sector = [
  { id: 0, name: `Selectionnez votre secteur d'activité` },
  { id: 1, name: "Clinique / Cabinet Médical" },
  { id: 2, name: "Construction BTP" },
  { id: 3, name: "Commerce / Distribution" },
  { id: 4, name: "Immobilier" },
  { id: 5, name: "Énergie, Mines, Matière première" },
  { id: 6, name: "Industries" },
  { id: 7, name: "Informatique/Télécom" },
  { id: 8, name: "Service publics / Administrations" },
  { id: 9, name: "Services & Prestations" },
  { id: 10, name: "Fonction Libérale" },
  { id: 11, name: "Agroalimentaire" },
  { id: 12, name: "Hôtellerie & Restauration " },
  { id: 13, name: "Autre" },
];
const offices = [
  {
    id: 1,
    city: "Oran",
    address: ["15 Boulevard Ibn Dirham l'Hippodrome, Oran, Algérie, 31000"],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Devis = () => {
  const [selected, setSelected] = useState(sector[0]);
  return (
    <>
      <Layout>
        <div className="bg-white">
          <main className="overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100/10">
              <div className="py-24 lg:py-32">
                <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold tracking-tight text-primaryBlue sm:text-5xl lg:text-6xl">
                    Demander un devis
                  </h1>
                  <p className="mt-6 max-w-3xl text-xl text-gray-500 lg:text-justify">
                    N&apos;attendez plus ! Remplissez notre formulaire de
                    demande de devis dès maintenant et obtenez l&apos;estimation
                    de coûts pour les produits ou services qui vous intéressent.
                    C&apos;est rapide, facile et surtout GRATUIT ! Faites le
                    choix de la qualité à un prix raisonnable en remplissant
                    notre formulaire de demande de devis.
                  </p>
                </div>
              </div>
            </div>
            {/* Contact section */}
            <section
              className="relative bg-white"
              aria-labelledby="contact-heading"
            >
              <Lottie
                animationData={waving}
                count={4}
                className="absolute top-0 h-48 w-auto right-1/4 -translate-y-48"
              />
              <div
                className="absolute h-1/2 w-full bg-gray-50"
                aria-hidden="true"
              />
              {/* Decorative dot pattern */}
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <svg
                  className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                        className="text-gray-300"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                  <h2 id="contact-heading" className="sr-only">
                    Contact us
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Contact information */}
                    <div className="relative overflow-hidden bg-gradient-to-b from-blue-500 to-PBD py-10 px-6 sm:px-10 xl:p-12">
                      {/* Decorative angle backgrounds */}
                      <div
                        className="pointer-events-none absolute inset-0 sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
                          width={343}
                          height={388}
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
                          width={359}
                          height={339}
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full"
                          width={160}
                          height={678}
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Contact information
                      </h3>
                      <p className="mt-6 max-w-3xl text-base text-blue-50">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                        volutpat massa dictumst amet. Sapien tortor lacus arcu.
                      </p>
                      <dl className="mt-8 space-y-6">
                        <dt>
                          <span className="sr-only">Contactez-nous</span>
                        </dt>
                        <dd className="flex text-base text-blue-50">
                          <PhoneIcon
                            className="h-6 w-6 flex-shrink-0 text-blue-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">0770 76 06 05</span>
                          <span className="ml-3">0770 76 06 12</span>
                        </dd>
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        <dd className="flex text-base text-blue-50">
                          <EnvelopeIcon
                            className="h-6 w-6 flex-shrink-0 text-blue-200"
                            aria-hidden="true"
                          />
                          <span className="ml-3">contact@kbdev.co</span>
                        </dd>
                      </dl>
                      <ul role="list" className="mt-8 flex space-x-12">
                        <li>
                          <a
                            className="text-blue-200 hover:text-blue-100"
                            href="#"
                          >
                            <span className="sr-only">Facebook</span>
                            <svg
                              className="h-7 w-7"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blue-200 hover:text-blue-100"
                            href="#"
                          >
                            <span className="sr-only">Instagram</span>
                            <svg
                              className="h-7 w-7"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blue-200 hover:text-blue-100"
                            href="#"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="h-7 w-7"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Contact form */}
                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 className="text-lg font-black uppercase text-gray-900">
                        KB Développement
                      </h3>
                      <form
                        action="#"
                        method="POST"
                        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="full-name"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Nom & Prénom *
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="full-name"
                              id="full-name"
                              autoComplete="name"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Adresse Mail *
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Numéro de Téléphone *
                            </label>
                          </div>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              aria-describedby="phone"
                              required
                            />
                          </div>
                        </div>
                        <fieldset
                          required
                          className="gap-4 grid lg:grid-rows-5 grid-rows-8 grid-flow-row lg:grid-flow-col"
                        >
                          <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                id="logiciels"
                                aria-describedby="comments-description"
                                name="logiciels"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-PBD focus:ring-primaryBlue"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="logiciels"
                                className="font-medium text-gray-700"
                              >
                                Logiciels de gestion
                              </label>
                            </div>
                          </div>
                          {services.map((item, id) => {
                            return (
                              <div
                                className="relative flex items-start"
                                key={id}
                              >
                                <div className="flex h-5 items-center">
                                  <input
                                    id={item.name}
                                    aria-describedby="comments-description"
                                    name={item.name}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-PBD focus:ring-primaryBlue"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor={item.name}
                                    className="font-medium text-gray-700"
                                  >
                                    {item.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </fieldset>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="sector"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Secteur d&apos;activité
                          </label>
                          <div className="mt-1">
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                                      <span className="block truncate">
                                        {selected.name}
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                          className="h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {sector.map((person) => (
                                          <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-blue-600"
                                                  : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-8 pr-4"
                                              )
                                            }
                                            value={person}
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "block truncate"
                                                  )}
                                                >
                                                  {person.name}
                                                </span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-blue-600",
                                                      "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Exprimez votre besoin en détail
                            </label>
                            <span
                              id="message-max"
                              className="text-sm text-gray-500"
                            >
                              Max. 1500 caractère
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              maxLength={1500}
                              className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primaryBlue focus:ring-blue-500"
                              aria-describedby="message-max"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                          <button
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-PBD focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact grid */}
            <section aria-labelledby="offices-heading">
              <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h2
                  id="offices-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900"
                >
                  Our offices
                </h2>
                <p className="mt-6 max-w-3xl text-lg text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {offices.map((office) => (
                    <div key={office.id}>
                      <h3 className="text-lg font-medium text-gray-900">
                        {office.city}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {office.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Devis;
