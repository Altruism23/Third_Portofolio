import { HoverEffect } from "./aceternityui/CardHoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 font-semibold text-md text-wrap text-justify">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "First Portfolio",
    description:
      "This is my first portfolio, marking the beginning of my journey into web development. Here, I created my very first website, documenting my learning process and growth. This project represents my dedication and commitment to becoming a better web developer, showcasing the skills and knowledge I've gained along the way.",
    link: "https://amsaldi.vercel.app",
    image: "/web1.png", // tambahkan url gambar disini
  },
  {
    title: "Company Profile",
    description: "In this project, I undertook the challenge of remaking a company's profile for the first time. It was a significant learning experience that allowed me to apply my front-end development skills in a real-world scenario, focusing on creating a more modern, user-friendly interface.",
    link: "https://amsaldi2.vercel.app",
    image: "/web2.png", // tambahkan url gambar disini
  },
  {
    title: "Google",
    description:
      "This is the portfolio website you are currently viewing. It serves as a comprehensive showcase of my work, skills, and projects. Designed and developed to highlight my abilities in front-end development, this website features a clean, modern design and interactive elements to engage visitors. Through this site, I aim to provide a clear and detailed view of my professional journey and achievements.",
    link: "https://amsaldi3.vercel.app",
    image: "/web3.png", // tambahkan url gambar disini
  },
];
