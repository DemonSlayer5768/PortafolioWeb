import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-[#003159] text-white",
    icon: SiNextdotjs,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: SiTailwindcss,
  },
};

const PROJECTS = [
  {
    title: "Pagina Web Streaming",
    description:
      "Pagina de contenido para series y peliculas un chingo de mamadas que debo de pober",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image:
      "https://vsd.mx/_next/image?url=https%3A%2F%2Fadmin.vsd.mx%2Fwp-content%2Fuploads%2F2023%2F11%2Fservicios-streaming.jpg&w=1080&q=75",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
  {
    title: "AdventJS - Retos de programación con JavaScript y TypeScript",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      {children}
    </a>
  );
}

export default function Proyectos() {
  return (
    <div className="container mx-auto px-14 py-24">
      <h1 className="text-3xl font-bold text-center mb-12 text-white-800">
        Proyectos
      </h1>
      <div className="flex flex-col gap-y-16">
        {PROJECTS.map(({ image, title, description, tags, link, github }) => (
          <article
            key={title}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  alt={title}
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading="lazy"
                  src={image}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
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

                <div className="mt-2 text-gray-700 dark:text-gray-400">
                  {description}
                </div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <LinkButton href={github}>
                      <FaGithub className="text-lg" />
                      Code
                    </LinkButton>
                  )}
                  {link && (
                    <LinkButton href={link}>
                      <FaLink className="text-lg" />
                      Preview
                    </LinkButton>
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
