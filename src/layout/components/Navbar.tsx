import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className="bg-black  shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logotipo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-white">
                Profile
              </a>
            </div>

            {/* Menú de navegación (visible en desktop) */}
            <div className="hidden md:flex space-x-4 items-center  text-white">
              <a href="#" className=" hover:text-blue-500 px-3 py-2">
                Inicio
              </a>
              {/* <a href="#" className=" hover:text-blue-500 px-3 py-2">
                Acerca de
              </a> */}
            </div>

            {/* Botón de hamburguesa (visible en móvil) */}
            <div className="flex items-center md:hidden text-white">
              <button
                onClick={() => setIsOpen(!isOpen)} // Alternar estado del menú
                className=" hover:text-white focus:outline-none cursor-pointer"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú colapsable (visible en móvil) */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
            <a href="/" className="block hover:text-blue-500 px-3 py-2">
              Inicio
            </a>
            <a href="/about" className="block  hover:text-blue-500 px-3 py-2">
              Acerca de
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
