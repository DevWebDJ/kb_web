import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-blue-50">
      <div className="mx-auto max-w-7xl py-12 px-4  md:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-blue-900  md:text-4xl">
          <span className="block">Déjà convaincu ? </span>
          <span className="block text-blue-600">
            demandez un devis, C&apos;est gratuit!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-5 text-base font-medium text-white hover:bg-blue-700"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
