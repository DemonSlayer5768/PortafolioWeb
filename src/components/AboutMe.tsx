import { IoPerson } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="container mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold text-left mb-12 text-white-800 flex items-center">
        <IoPerson className="mr-4 text-4xl" /> Sobre mi
      </h1>

      {/* Texto */}
      <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
          <p>
            Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la
            programación con un Amstrad, tenía 10 años. Actualmente estoy{" "}
            <strong>liderando equipos de desarrollo en multinacionales</strong>.
          </p>

          <p>
            Algunos de mis éxitos incluyen{" "}
            <strong>
              colaborar con Mozilla para el desarrollo de las primeras apps en
              su sistema FirefoxOS
            </strong>
            . Aunque hoy está desaparecido, fue un gran avance en el mundo del
            desarrollo web.
          </p>

          <p>
            Como creador de contenido,{" "}
            <strong>
              cuento con el canal de habla hispana más visto del mundo en la
              categoría de{" "}
              <em className="italic">Software & Game Development</em> en Twitch
            </strong>
            . Mi objetivo es mejorar la empleabilidad de la comunidad hispana y
            el acceso a contenido de calidad.
          </p>
        </div>

        <img
          width="200"
          height="200"
          src="https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg"
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
          style={{ objectPosition: "50% 50%" }}
        />
      </article>
    </div>
  );
}
