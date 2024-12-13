import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="container mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-white-800">
        Contacto
      </h1>
      <div className="flex flex-wrap items-left gap-8">
        {/* Correo Electrónico */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl text-blue-500" />
          <p className="text-lg text-white-300">jjaimeloza5768@gmail.com</p>
          {/* Redes Sociales */}={/* LinkedIn */}
          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-700 hover:text-blue-800 transition duration-300"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-gray-500 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
