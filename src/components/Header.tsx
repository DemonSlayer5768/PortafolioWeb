import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/#home" },
  { name: "Experiencia", href: "/#experence" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#proyects" },
  { name: "Sobre Mi", href: "/#aboutMe" },
  { name: "Contactame", href: "maito:jjaimeloza5768@gmail.com" },
];

export default function MenuPerfil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="fixed z-50 rounded-full mx-auto left-0 right-0 max-w-6xl ">
        <nav className="fixed z-50 rounded-full mx-auto left-0 right-0 max-w-6xl  flex items-center justify-center h-16 ">
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:bg-white hover:text-black px-10 py-2 rounded-full text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded="false">
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white hover:text-black px-10 py-2 rounded-full text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
