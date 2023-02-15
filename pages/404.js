import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <>
      <Layout>
        <main
          className="min-h-screen bg-cover bg-top "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-48">
            <p className="text-base font-semibold text-black text-opacity-50">
              404
            </p>
            <h1 className="mt-2 md:text-4xl font-bold tracking-tight text-white  text-5xl">
              Uh oh! I think you&apos;re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              It looks like the page you’re looking for doesn&apos;t exist.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black text-opacity-75  bg-opacity-25  hover:bg-opacity-50"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default NotFound;
