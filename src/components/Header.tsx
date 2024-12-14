import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/#home" },
  { name: "Experiencia", href: "/#experence" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#proyects" },
  { name: "Sobre Mi", href: "/#aboutMe" },
];

export default function MenuPerfil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="fixed top-0 items-center z-50  bg-gray-800 rounded-full">
        <div>
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:bg-white hover:text-black px-10 py-2 rounded-full text-lg font-medium "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
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
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white hover:text-black px-10 py-2 rounded-full text-lg font-medium "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
