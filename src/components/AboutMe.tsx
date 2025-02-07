import { IoPerson } from "react-icons/io5";
const FotoAboutMe = "/images/FotoMe3.jpg";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-14 py-24">
      <h1 className="text-3xl font-bold text-left mb-12 text-white-800 flex items-center">
        <IoPerson className="mr-4 text-4xl" /> Sobre mi
      </h1>

      {/* Texto */}
      <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-blue-400 dark:[&>p>strong]:text-blue-400 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
          <p>
            Mi nombre es Jonathan Silvestre Jaime Loza , mi pasatiempos
            favoritos son escuchar musica y ver series Actualmente estoy,{" "}
            <strong>
              Terminando la universidad en la carrera de ingenieria en
              computacion en CUCEI
            </strong>
            .
          </p>

          <p>
            Algunas de mis experiencias fue ,{" "}
            <strong>
              Colaborar como auxiliar de programacion en Coparmex Jalisco en
              desarrollar aplicaciones diseñadas para optimizar los procesos y
              la productividad de los empleados. Además participé en el
              mantenimiento y mejora de diversos proyectos Web.
            </strong>
          </p>

          <p>
            Como Frontend Developer,{" "}
            <strong>
              Espero poder mejorar mis diseños que sean actractivos para los
              usuarios que lo van a visualizar.{" "}
            </strong>
            Mi objetivo es poder crear herramientas que sean faciles de manejar
            por usuarios finales.
          </p>
        </div>

        <img
          width="200"
          height="200"
          src={FotoAboutMe}
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
          style={{ objectPosition: "50% 50%" }}
        />
      </article>
    </div>
  );
}
