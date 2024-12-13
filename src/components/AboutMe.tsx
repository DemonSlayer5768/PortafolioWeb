export default function AboutMe() {
  return (
    <div className="container mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-white-800">
        Sobre Mi
      </h1>
      <div className="flex flex-wrap items-center gap-8">
        {/* Imagen */}
        <div className="relative group">
          <img
            src="https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg"
            alt="Foto de perfil"
            className="rounded-full w-64 h-64 object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Texto */}
        <div className="flex-1">
          <p className="mt-3 text-white-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Soy un apasionado desarrollador web con experiencia en crear
            soluciones digitales innovadoras. Me especializo en crear interfaces
            de usuario intuitivas y eficientes. Siempre estoy buscando nuevos
            desafíos y oportunidades para aprender y crecer en el mundo del
            desarrollo web. Mi enfoque se centra en construir aplicaciones web
            modernas y escalables que brinden una excelente experiencia al
            usuario.
          </p>
        </div>
      </div>
    </div>
  );
}
