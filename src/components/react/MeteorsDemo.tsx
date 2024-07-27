import React from "react";
import { Meteors } from "./aceternityui/Meteors";
import { TextGenerateEffect } from "./aceternityui/TextGenerateEffect";
import { HoverBorderGradient } from "./aceternityui/HoverBorderGradient";

const words1 =
  "Hello! I'm a dedicated web developer with a strong foundation in front-end technologies, combining my love for language and code to create engaging and intuitive web experiences. I bring a unique perspective to the tech world, emphasizing clarity and creativity in all my projects. My journey into web development was further honed at Purwadhika Digital Technology School, where I immersed myself in the latest industry standards and best practices.";
const words2 =
  "Transitioning from academia to technology has equipped me with a diverse skill set, allowing me to approach challenges with analytical thinking and an eye for detail. My expertise in front-end development includes proficiency in HTML, CSS, JavaScript, and modern frameworks, ensuring that I can bring any vision to life on the web. I am passionate about crafting user-centric designs and seamless interactions, continually learning and adapting to stay at the forefront of web development trends.";

export function MeteorsDemo() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black px-4 py-8 min-h-screen overflow-hidden rounded-2xl flex flex-col items-start">
          <div className="flex justify-center items-center text-center w-full py-5">
            <p className="text-white text-6xl">About Me</p>
          </div>
          <div className="flex flex-wrap justify-evenly w-full min-h-screen">
            <div className="max-w-3xl text-justify leading-8 indent-12 p-10">
              <TextGenerateEffect
                filter={false}
                duration={0.5}
                words={words1}
              />
              <TextGenerateEffect filter={false} duration={1} words={words2} />
            </div>
            <div className="flex flex-col mt-5 p-10 mx-auto">
              <p className="text-white text-[24px] font-semibold text-center">
                TECH SKILLS
              </p>
              <div className="grid grid-cols-2 max-md:flex max-md:flex-wrap gap-3 p-3">
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/HTML.png" width={36} height={36} /> HTML
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/CSS.png" width={36} height={36} /> CSS
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/React.png" width={36} height={36} /> React
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/Redux.png" width={36} height={36} /> Redux
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/nextwhite.webp" width={36} height={36} /> NextJS
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/tailwindcss.png" width={36} height={36} />{" "}
                  Tailwindcss
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/Javascript.png" width={36} height={36} />{" "}
                  JavaScript
                </HoverBorderGradient>
                <HoverBorderGradient className="flex justify-center text-center items-center gap-1">
                  <img src="/typescript.png" width={36} height={36} />{" "}
                  TypeScript
                </HoverBorderGradient>
              </div>
            </div>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
