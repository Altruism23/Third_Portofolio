import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "./aceternityui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl flex flex-col justify-center items-center relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Contact <br /> Get in Touch
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-justify mx-auto">
          I&apos;m always excited to connect with fellow developers, potential
          collaborators, and anyone interested in my work. Whether you have a
          project in mind, a question about my experience, or just want to say
          hello, feel free to reach out. Here are the best ways to get in touch
          with me:
        </p>
        <ul className="text-white text-base flex flex-col text-center gap-3">
            <li>Email: <a href="mailto:amsaldikristian@gmail.com" target="_blank" className="hover:underline"> amsaldikristian@gmail.com</a></li>
            <li>Linkedin: <a href="https://www.linkedin.com/in/amsaldi/" target="_blank" className="hover:underline">linkedin.com/in/amsaldi</a></li>
            <li>Github: <a href="https://github.com/Altruism23" target="_blank" className="hover:underline">github.com/Altruism23</a></li>
        </ul>
        
      </div>
    </div>
  );
}
