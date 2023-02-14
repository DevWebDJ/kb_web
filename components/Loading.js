import React from "react";
import Lottie from "lottie-react";
import loader from "../public/assets/kb_loader.json";

const Loading = () => {
  return (
    <>
      <Lottie loop animationData={loader} className="h-screen w-auto" />
    </>
  );
};

export default Loading;
