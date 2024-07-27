import React from "react";
import { FlipWords } from "./aceternityui/FlipWords";
import ShootingStars from "./aceternityui/ShootingStars";
import { StarsBackground } from "./aceternityui/StarsBackground";

export function FlipWordsDemo() {
  const words = ["Welcome,", "Hola,", "Hello,"];

  return (
    <div className="h-screen rounded-md bg-black flex flex-col items-center justify-center relative">
      <FlipWords words={words} className="text-white text-4xl" />
      <p className="text-white text-4xl mb-2">My Name Is Amsaldi</p>
      <p className="text-blue-300 text-4xl mb-8">Front-End Developer</p>
      <a href="/#about" 
      className="text-white border-2 animate-bounce z-50 px-4 py-2 rounded-md ">
        Learn More
      </a>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default FlipWordsDemo;
