import React from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import notfound from "../public/assets/notFound.json";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Layout>
        <main className=" bg-cover bg-top py-10">
          <div className="mx-auto max-w-7xl text-center">
            <Lottie loop animationData={notfound} className=" h-[50vh] " />
            <div className="inline-flex rounded-md shadow">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-5 text-base font-medium text-white hover:bg-blue-700"
            >
              Page d&apos;acceuil
            </Link>
          </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default NotFound;
