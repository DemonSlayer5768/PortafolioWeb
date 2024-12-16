import { IoBriefcaseOutline } from "react-icons/io5";
interface Props {
  title: string;
  company: string;
  description: string;
  date: string;
  link?: string;
}

const experiences: Props[] = [
  {
    title: "Software Engineer",
    company: "Coparmex Jal",
    description:
      "Durante mi tiempo en esta empresa, me enfoqué en desarrollar aplicaciones diseñadas para optimizar los procesos y la productividad de los empleados. " +
      "Además, participé en el mantenimiento y mejora de diversos proyectos Web utilizando múltiples Herramientas de programación," +
      "así como en la gestión y manipulación de bases de datos.",

    date: "2023 - 2024",
    link: "https://coparmexjal.org.mx/contacto.html",
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    description:
      "Durante este período, me dediqué a estudiar diversos frameworks de CSS con el objetivo de implementarlos en distintos proyectos. Asimismo, desarrollé" +
      "habilidades para implementar la lógica necesaria en la creación de funciones, optimizando la interacción de los usuarios. También me enfoqué en el diseño y desarrollo" +
      "de diversos componentes para páginas web, mejorando la experiencia y el diseño final orientado a los usuarios.",
    date: "2022 - 2023",
  },
];

export default function Experiencia() {
  return (
    <div className="container mx-auto px-14 py-24">
      <div className="grid gap-12">
        <h1 className="text-3xl font-bold text-left mb-12 flex items-center">
          <IoBriefcaseOutline className="mr-4 text-4xl" /> Experiencia
        </h1>

        {experiences.map((job, index) => (
          <div
            key={index}
            className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4"
          >
            <div className="relative pb-12 md:col-span-2">
              <div className="sticky top-0">
                <span className="text-blue-400 -left-[42px] absolute rounded-full text-5xl">
                  &bull;
                </span>
                <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                <h4 className="font-semibold text-xl ">{job.company}</h4>
                <time className="p-0 m-0 text-sm  text-gray-600/800">
                  {job.date}
                </time>
              </div>
            </div>
            <div className="relative flex flex-col text-left gap-2 pb-4  dark:text-white-600 md:col-span-3">
              <p>{job.description}</p>
              {job.link && (
                <a
                  href={job.link}
                  className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saber más{" "}
                  <svg
                    className="w-5 icon icon-tabler icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
