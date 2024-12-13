import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/#home" },
  { name: "Experiencia", href: "/#experence" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#proyects" },
  { name: "Sobre Mi", href: "/#aboutMe" },
  { name: "Contacto", href: "/#contact" },
];

export default function MenuPerfil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 items-center  z-50">
      <div>
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <span className="text-2xl font-bold text-white-800">*CODE*</span> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white-600 hover:bg-white hover:text-black px-10 py-2 rounded-md text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:bg-gray-100 hover:text-white-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
