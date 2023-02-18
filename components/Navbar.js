/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { services } from "../data/constant";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white z-50">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start items-center gap-3 lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="sr-only">Développement</span>
              <img
                className="h-10 w-auto  md:h-12 lg:h-10"
                src="/logo_small.svg"
                alt="Logo KB"
              />
              <h1 className="text-[#1257A3] font-semibold lg:text-base text-sm">
                Développement
              </h1>
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 lg:flex lg:items-center"
          >
            <Link
              href="/software"
              className="text-base font-medium text-gray-500 hover:text-primaryBlue"
            >
              Nos Logiciels
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-primaryBlue" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-primaryBlue focus:outline-none "
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-white px-5 py-6  md:gap-8  p-8 lg:grid-cols-2">
                          {services.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                              <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue text-white  h-12  w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-8">
                          <Link
                            href="/services/web"
                            className="-m-3 flow-root rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                            passHref
                          >
                            <span className="flex items-center">
                              <span className="text-base font-medium text-gray-900 flex">
                                Développement application web & site internet
                                <Image
                                  src="/sparkle.gif"
                                  height={50}
                                  width={25}
                                  alt="sparkles"
                                />
                              </span>
                              <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs leading-5 font-semibold text-primaryBlue">
                                New
                              </span>
                            </span>
                            <span className="mt-1 block text-sm text-gray-500">
                              Notre nouveau service de développement de
                              sites/applications Web/Mobile vous permettra de
                              conquérir le monde du digital !
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-primaryBlue"
            >
              Qui sommes-nous ?
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <Link
              href="/devis"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-PBD"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-10 w-auto"
                    src="/logo_normal.svg"
                    alt="KB Développement"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-primaryBlue focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-200"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 ">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href="/software"
                  className="text-sm font-medium text-gray-900 hover:text-primaryBlue text-center"
                >
                  Nos Logiciels
                </Link>

                <Link
                  href="/about"
                  className="text-sm font-medium text-gray-900 hover:text-primaryBlue text-center"
                >
                  Qui sommes-nous ?
                </Link>
              </div>
              <div>
                <Link
                  href={"/devis"}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primaryBlue"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
