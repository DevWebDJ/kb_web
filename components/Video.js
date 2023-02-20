import React from "react";

const Video = () => {
  const textChanging = (e) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index];
          } else {
            return letters[Math.floor(Math.random() * 26)];
          }
        })
        .join("");
      if (iterations >= e.target.dataset.value.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div className="flex items-center lg:justify-center  flex-col bg-vid lg:h-[1125px] py-10">
      <div className="w-full flex items-center justify-center h-48">
        <h1 className=" text-2xl md:text-4xl lg:text-7xl font-black  lg:pt-10 pt-20  lg:w-3/4  text-center break-words uppercase ">
          Voyez par vous-même nos services{" "}
          <span
            data-value="en action."
            onMouseOver={textChanging}
            className=" text-transparent bg-clip-text bg-primaryBlue bg-cover "
          >
            en action.
          </span>
        </h1>
      </div>
      <iframe
        className=" shadow-md lg:w-3/4 w-full lg:h-3/5 px-2 h-96 lg:translate-y-12"
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/K9gYbwzOEcI?rel=0&color=white"
        title="KB Développement | tout sous un même toît"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
    </div>
  );
};

export default Video;
