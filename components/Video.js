import React from "react";

const Video = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-vid h-screen py-10">
      <h1 className=" text-6xl font-bold pb-8">
        Voyez par vous-même nos services en action
      </h1>
      <iframe
        className=" shadow-md w-full lg:w-1/2 lg:h-full px-2 h-96"
        width="1180"
        height="664"
        src="https://www.youtube.com/embed/7I8O2E5BHDo?rel=0&color=white"
        title="KB Développement | tout sous un même toît"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
    </div>
  );
};

export default Video;
