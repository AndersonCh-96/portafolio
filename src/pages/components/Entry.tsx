import React from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaPhone } from "react-icons/fa";

const Entry = () => {
  return (
    <React.Fragment>
      <header className="relative w-full flex items-center ">
        <img
          src="./img/portada.jpg"
          alt="Portada"
          className="w-full h-96 object-cover "
        />
        <div className="absolute  w-full h-96 bg-black opacity-50"></div>
        <div className="absolute  w-full h-auto flex flex-col items-star p-10 text-white">
          <h1 className="text-4xl font-bold ">Hola, mi nombre es Anderson!</h1>
          <span className="text-sm font-thin md:w-[520px]">
            Soy una persona apasionada por la tecnología y el desarrollo web,
            siempre comprometido con aprender y adaptarme a nuevas tecnologías
            que están a la vanguardia. Mi enfoque está en mejorar continuamente
            mis habilidades para implementar soluciones innovadoras que
            resuelvan problemas reales.
          </span>
          <div className="flex gap-4 mt-1">
            <FaLinkedin className="text-2xl cursor-pointer " />
            <FaGithub className="text-2xl cursor-pointer" />
            <FaGitlab className="text-2xl cursor-pointer" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Entry;
