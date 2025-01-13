import React, { useState, useEffect } from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";

const imgsProyecs: { [key: string]: { src: string; alt: string }[] } = {
  itemsImgsProyect1: [
    { src: "/images/imgCineFlare1.jpg", alt: "img1" },
    { src: "/images/imgCineFlare2.jpg", alt: "img2" },
    { src: "/images/imgCineFlare3.jpg", alt: "img3" },
    { src: "/images/imgCineFlare4.jpg", alt: "img4" },
  ],
  itemsImgsProyect2: [
    { src: "/images/imgPDF2Ex1.jpg", alt: "imgP1" },
    { src: "/images/imgPDF2Ex2.jpg", alt: "imgP2" },
    { src: "/images/imgPDF2Ex3.jpg", alt: "imgP3" },
    { src: "/images/imgPDF2Ex4.jpg", alt: "imgP4" },
    { src: "/images/imgPDF2Ex5.jpg", alt: "imgP5" },
  ],
};
const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-[#4CAF50] text-white",
    icon: SiNextdotjs,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#1A73E8] text-white",
    icon: SiTailwindcss,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#e6cc00] text-white",
    icon: IoLogoJavascript,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#3776AB] text-white",
    icon: FaPython,
  },
};
const PROJECTS = [
  {
    title: "Pagina Web Streaming",
    description:
      "Proyecto de una página web de streaming de películas y series, con un diseño moderno y atractivo. " +
      "Desarrollado con Next.js y Tailwind CSS." +
      "para el BackEnd se utilizo JavaScrip y para la base de datos use MySQL.",
    github: "https://github.com/DemonSlayer5768/ProyectoWeb",
    projectKey: "itemsImgsProyect1",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.JAVASCRIPT],
  },
  {
    title: "PDF2ExcelComparer",
    description:
      "El programa es una herramienta que extrae y compara datos de PDFs y Excel, ideal para contadores al validar estados de " +
      "cuenta contra archivos auxiliares. Facilita la detección de discrepancias, incluso en PDFs protegidos, " +
      "agilizando el proceso de verificación.",
    github: "https://github.com/DemonSlayer5768/PDF2ExcelComparer",
    projectKey: "itemsImgsProyect2",
    tags: [TAGS.PYTHON],
  },
];

export default function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProject] = useState(PROJECTS[0].projectKey);

  const projectsImages = imgsProyecs[currentProject];

  // Cambiar la imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const handlePrevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? projectsImages.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="container mx-auto px-14 py-24">
      <h1 className="text-3xl font-bold text-left mb-12 flex items-center">
        <IoCodeSlash className="mr-4 text-4xl" /> Proyectos
      </h1>
      <div className="flex flex-col gap-y-16">
        {PROJECTS.map(({ title, description, tags, github, projectKey }) => (
          <article
            key={title}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          >
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative flex w-full h-64 transition-transform duration-700 ease-in-out transform">
                  {projectsImages.map((img, index) => (
                    <img
                      key={img.alt}
                      src={imgsProyecs[projectKey][currentIndex].src}
                      alt={img.alt}
                      className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-700  ${
                        index === currentIndex
                          ? "translate-x-0"
                          : index > currentIndex
                          ? "translate-x-full"
                          : "-translate-x-full"
                      }`}
                    />
                  ))}
                </div>
                {/* <button
                  className="absolute left-0 z-10 px-4 py-2 text-white bg-black/50 hover:bg-black/75"
                  onClick={handlePrevImage}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="absolute right-0 z-10 px-4 py-2 text-white bg-black/50 hover:bg-black/75"
                  onClick={handleNextImage}
                >
                  <FaChevronRight />
                </button> */}
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold">{title}</h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <span
                        className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                      >
                        <tag.icon className="text-lg" />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-justify">{description}</div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </a>
                  )}
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
