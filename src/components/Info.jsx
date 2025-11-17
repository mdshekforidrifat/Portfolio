import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import image from "../assets/my.png"

const Info = () => {
  return (
    
    <div className='w-full min-h-[200px] mt-20'>
        <div className='container mx-auto flex items-center justify-around p-5'>
            <div className='text'>
            <p className=' text-[15px] lg:text-sm text-neutral-700 mb-3'>Hello I am <span className='text-emerald-600 font-bold'>Md Shek forid Rifat</span></p>
            <h1 className='text-2xl lg:text-4xl font-semibold mb-3'>Fronted Developer</h1>
            <p className='text-[12px] lg:text-sm text-neutral-700'>MERN Stack Developer focused on building modern, responsive, and user-friendly web applications.</p>
            <div className='mt-5'>
                <button className='px-7 py-2 border-2 rounded-xl lg:text-lg font-semibold bg-emerald-600 text-white cursor-pointer hover:scale-95 transition hover:bg-emerald-700'>Downlode cv</button>
            </div>
            <div className="icon mt-5 px-4 hidden lg:flex space-x-5 text-2xl">
                      <a href="https://github.com/mdshekforidrifat">
                        <FaGithub className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer"/>
                      </a>
                      <a href="https://www.linkedin.com/in/mdshekforidrifat/">
                        <FaLinkedin className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
                      </a>
                      <a href="https://www.facebook.com/shekforidrifat01">
                        <FaFacebook className="hover:text-emerald-600 hover:scale-85 transition cursor-pointer" />
                      </a>
                    </div>
            </div>
            <div className='image w-100 '>
               <img className='w-full shadow-amber-600-2xl
               border-2 border-emerald-400 object-cover object-center rounded-full' src={image} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Info