import { Code, Laptop, Sparkles } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { handleContact, handleDownloadCV } from "@fuctions/fuctions";

export default function HeroSection() {
  return (
    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-4xl ">
            <span className="block md:text-6xl">Hola soy, Jonathan</span>
            <span className="block text-blue-400 md:text-5xl mt-3">
              Software Developer
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-blue-500 [&>strong]:text-blue-500 [&>strong]:font-semibold dark:text-gray-300 mb-5">
            Actulmente me encuentro cursando la carrera de{" "}
            <strong>ingenieria en computacion</strong> en el Centro
            Universitario de Ciencias Exactas e Ingenierías .
          </p>
          <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51A7E8_0%,#2154AE_50%,#51A7E8_100%)]"></span>
              <p className="flex items-center justify-center w-full px-4 py-2 text-lg text-blue-800 bg-blue-100 rounded-full  dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl hover:bg-white hover:text-slate-900 transition-all">
                Disponible para Trabajar
              </p>
            </span>
            <a
              className="hover:text-blue-500 py-2 px-4 rounded-lg text-lg"
              href="https://www.linkedin.com/in/jonathan-silvestre-jaime-loza-572795194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="text-4xl" />
            </a>
            <a
              className="hover:text-blue-500 py-2 px-4 rounded-lg text-lg"
              href="https://github.com/DemonSlayer5768"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="bg-blue-500  hover:bg-blue-600 py-2 px-4 rounded-lg text-lg "
              onClick={handleDownloadCV}
            >
              Descargar CV
            </button>
            <button
              className="border-2   hover:bg-white hover:text-slate-900 py-2 px-4 rounded-lg text-lg "
              onClick={handleContact}
            >
              Contactame
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:ml-40">
            <img
              src="src\Imgs\FotoMe.jpg"
              alt="JonaPhoto"
              width="350"
              height="350"
              className="rounded-full object-cover shadow-xl"
            />

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <Code size={40} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Laptop size={32} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center animate-spin-slow">
              <Sparkles size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
