import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import banner from "../public/assets/banner.json";

const Banner = () => {
  return (
    <>
      <motion.div className="h-[30vh] lg:flex justify-center items-center overflow-hidden bg-white hidden">
        <Lottie animationData={banner} count={4} className="" />
      </motion.div>
    </>
  );
};

export default Banner;
