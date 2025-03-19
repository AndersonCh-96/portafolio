import React from "react";
import Datos from "../data/data";

import Entry from "./components/Entry";

import { SiCisco } from "react-icons/si";

const Home = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="">
          <Entry />
        </div>
        <div className="w-full">
          <div className="bg-black h-20 flex items-center justify-center font-bold text-2xl  ">
            <h1 className="text-white uppercase font-extrabold">Proyectos</h1>
          </div>
          <div className=" md:flex w-full flex-wrap gap-4 ">
            {Datos.map((item: any, index: number) => {
              // Mapea todas las tarjetas sin limitar el número
              return (
                <div key={index} className="flex w-full md:w-[320px] p-2">
                  <div className="bg-white border  border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="p-4 md:p-5 w-ful">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a
                        className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* pruebas */}
        <div>
          <section className="bg-black text-white pt-8 pb-4">
            <h2 className="text-center text-2xl mb-2 font-bold leading-8">
              HABILIDADES
            </h2>
            {/* <p className="text-center text-lg font-extralight leading-8">
              We are trusted by the world’s most innovative teams
            </p> */}

            <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="animate-slide-left-infinite group-hover:pause inline-block w-max ">
                <img
                  className="mx-4 inline h-16"
                  src="img/test.jpg"
                  alt="Transistor"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
                  alt="Reform"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
                  alt="Tuple"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
                  alt="SavvyCal"
                />

                <img
                  className="mx-4 inline h-16"
                  src="/vite.svg"
                  alt="Statamic"
                />

                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg"
                  alt="Laravel"
                />
              </div>

              <div className="animate-slide-left-infinite group-hover:pause inline-block w-max">
                <img
                  className="mx-4 inline h-16"
                  src="img/html.svg"
                  alt="Transistor"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
                  alt="Reform"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
                  alt="Tuple"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
                  alt="SavvyCal"
                />
                <img
                  className="mx-4 inline h-16"
                  src="img/html.svg"
                  alt="Statamic"
                />
                <img
                  className="mx-4 inline h-16"
                  src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg"
                  alt="Laravel"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Habilidades */}

        {/* <div className="flex flex-col">
          <div className="bg-black h-20 flex items-center justify-center font-bold text-2xl  ">
            <h1 className="text-white uppercase font-extrabold">Habilidades</h1>
          </div>
          <div className="flex gap-4">
            <div>
              <h1>React</h1>
              <FaReact />
            </div>
            <div>
              <h1>Tailwind</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 54 33"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
              </svg>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col">
          <div className="bg-black h-20 flex items-center justify-center font-bold text-2xl  ">
            <h1 className="text-white uppercase font-extrabold">
              Certificados
            </h1>
          </div>

          <div className="flex flex-col bg-black text-white">
            <div className="flex flex-col mt-6 mx-10">
              <div className="flex justify-between  ">
                <h1>Networking Basics</h1>
                <span>2023</span>
              </div>
              <div className="flex gap-3">
                <SiCisco className="text-2xl" />
                <span>Cisco</span>
              </div>
            </div>
            {/* Segundo */}
            <div className="flex flex-col mt-6 mx-10">
              <div className="flex justify-between  ">
                <h1>Networking Devices and Initial Configuration</h1>
                <span>2023</span>
              </div>
              <div className="flex gap-3">
                <SiCisco className="text-2xl" />
                <span>Cisco</span>
              </div>
            </div>
            {/* Tercero */}
            <div
              className="flex flex-col mt-6 mx-10 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.credly.com/badges/b8a7e202-d422-4945-afa2-74d1002a8362/linked_in_profile"
                );
              }}
            >
              <div className="flex justify-between  ">
                <h1>Python Essentials 1</h1>
                <span>2023</span>
              </div>
              <div className="flex gap-3">
                <SiCisco className="text-2xl" />
                <span>Cisco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
