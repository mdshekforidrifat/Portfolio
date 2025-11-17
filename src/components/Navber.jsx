import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

const Navber = () => {
  const [mobileber, setMobileber] = useState(false);
  const showtoggel = () => {
    setMobileber(!mobileber);
  };
  return (
    <nav className="w-full fixed z-50 bg-neutral-50 border-b-2 shadow-xl text-black p-5">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-normal ">
          Mr<span className="text-3xl font-extrabold text-emerald-500">X</span>
        </h1>
        <div className="hidden md:flex section lg:flex space-x-5 text-lg font-semibold ">
          <a
            className="hover:text-emerald-600 hover:scale-95 transition"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-emerald-600 hover:scale-95 transition"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-emerald-600 hover:scale-95 transition"
            href="#project"
          >
            Project
          </a>
          <a
            className="hover:text-emerald-600 hover:scale-95 transition"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="icon hidden md:flex lg:flex space-x-5 text-xl">
          <a href="https://github.com/mdshekforidrifat">
            <FaGithub className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/mdshekforidrifat/">
            <FaLinkedin className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/shekforidrifat01">
            <FaFacebook className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
        </div>
        {/* Mobile menu bar */}
        <div className="lg:hidden md:hidden flex justify-end">
          <button onClick={showtoggel}>
            {mobileber ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
        {mobileber && (
        <div className=" absolute top-19.5 right-0  md:hidden bg-neutral-100 w-full py-5 flex flex-col items-center space-y-4 text-lg font-semibold shadow-lg">
          <div className="flex flex-col space-y-3 items-center">
            <a onClick={() => setMobileber(false)} href="#home" className="hover:text-emerald-600">
            Home
          </a>
          <a onClick={() => setMobileber(false)} href="#about" className="hover:text-emerald-600">
            About
          </a>
          <a onClick={() => setMobileber(false)} href="#project" className="hover:text-emerald-600">
            Project
          </a>
          <a onClick={() => setMobileber(false)} href="#contact" className="hover:text-emerald-600">
            Contact
          </a>
          </div>
          <div>
            <div className="icon flex  md:flex lg:hidden space-x-5 text-2xl">
          <a href="https://github.com/mdshekforidrifat">
            <FaGithub className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/mdshekforidrifat/">
            <FaLinkedin className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/shekforidrifat01">
            <FaFacebook className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
          </a>
        </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navber;
