import { Code, Laptop, Sparkles } from "lucide-react";
import { handleContact, handleDownloadCV } from "@fuctions/fuctions";

export default function HeroSection() {
  return (
    <div className="container mx-auto py-24">
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Hola soy, Jonathan</span>
              <span className="block text-blue-400">Software Developer</span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Creando elegantes soluciones de complejos problemas apasionado a
              la tenologia y al hacer codigo limpio tambien al usar nuevas
              tecnologias.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg text-lg "
                onClick={handleDownloadCV}
              >
                Descargar CV
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 py-2 px-4 rounded-lg text-lg "
                onClick={handleContact}
              >
                Contactame
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/18716098-icone-de-gradiente-de-linha-do-programador-vetor.jpg"
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
    </div>
  );
}
