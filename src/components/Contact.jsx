import React from "react";
import { MdOutlineAttachEmail ,MdOutlineLocationOn  } from "react-icons/md";
import { FaWhatsapp  } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="w-full max-h-[400px] mt-10 mb-15 lg:mt-20 lg:mb-30">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-xl lg:text-3xl font-bold text-emerald-600 relative inline-block ">
            Get In Touch
            <span className="absolute -translate-x-1/2 left-1/2 -bottom-1 w-1/3  h-[3px] bg-black rounded-md"></span>
          </h1>
        </div>
        <div className=" mt-10 lg:mt-20  flex flex-col items-center justify-center lg:flex-row lg:justify-around">
          <div className="text">
            <h3 className="text-sm lg:text-md font-light text-center ">Feel free to reach out anytime — I’m always open to new opportunities and collaborations.</h3>
            <div className="icon my-2 lg:my-5 items-center justify-center flex lg:flex-col gap-4">
                <div className="flex items-center   lg:gap-2 ">
                    <MdOutlineAttachEmail lg:size={21} className="text-neutral-600 " />
                    <p className="text-emerald-600 text-[13px] lg:text-[15px]">mdshekforidrifat@gmail.com</p>
                </div>
                <div className="flex items-center lg:gap-2 ">
                    <FaWhatsapp   lg:size={21}  className="text-neutral-600" />
                    <p className="text-emerald-600 text-[13px] lg:text-[15px]">01804139033</p>
                </div>
                <div className="flex items-center lg:gap-2 ">
                    <MdOutlineLocationOn  lg:size={21} className="text-neutral-600" />
                    <p className="text-emerald-600 text-[13px] lg:text-[15px]">Dhaka, Bangladesh</p>
                </div>
            </div>
          </div>
          <div className="form w-95 lg:w-120 bg-neutral-50 drop-shadow-2xl rounded-2xl p-5 lg:p-10">
            <form className="flex flex-col gap-3" >
                <input className="border border-neutral-400 rounded-lg px-3 py-1" type="text" placeholder="Your name" />
                <input className="border border-neutral-400 rounded-lg px-3 py-1" type="text" placeholder="Your email" />
                <textarea className="border border-neutral-400 rounded-lg h-25 resize-none px-3 py-1" placeholder="enter your message" />
                <button className="bg-emerald-500 p-2 rounded-lg text-sm font-semibold text-white cursor-pointer hover:bg-emerald-600 hover:scale-98 transition" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
