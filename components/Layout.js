import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Outfit } from "@next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

const Layout = (props) => {
  return (
    <div className={outfit.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <AnimatePresence>
        <Navbar />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.25 }}
        >
          {props.children}
        </motion.div>
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default Layout;
