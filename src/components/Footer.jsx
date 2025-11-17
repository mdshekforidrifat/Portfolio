import React from "react";
import { LuCopyright } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 lg:py-8 mt-10 lg:mt-20">
      <div className="flex items-center justify-center flex-col gap-2">
        {/* Social media */}
        <div className="icon flex space-x-5 text-lg lg:text-xl">
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
        {/* copyright  */}
        <div className="flex gap-2 items-center text-neutral-400 font-semibold text-[12px]">
          <LuCopyright />
          {new Date().getFullYear()} Shek forid rifat | All right reserve
        </div>
      </div>
    </footer>
  );
};

export default Footer;
