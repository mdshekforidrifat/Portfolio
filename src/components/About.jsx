import React from "react"
import {Skill} from '../add.js'
import code from "../assets/code.png"

const About = () => {
  return (
    <div className="w-full min-h-[200px] mt-20 lg:mt-30">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-xl lg:text-3xl font-bold text-emerald-600 relative inline-block group">
            About Me
            <span className="absolute -translate-x-1/2 left-1/2 -bottom-1 w-1/3  h-[3px] bg-black rounded-md"></span>
          </h2>
        </div>
        <div className="mt-10 w-full lg:flex justify-around space-x-8 lg:p-10">
           <div className="w-full lg:w-1/2 px-5 lg:p-5">
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae quis accusantium molestiae rerum itaque sequi laboriosam ipsa et veniam?</p>
             <h1 className="mt-5 text-xl lg:text-2xl font-semibold">Skills</h1>
             <div className="flex space-x-4 mt-4 flex-wrap gap-2">
                {Skill.map((items,index)=>(
                    <p key={index} className="px-5 py-1 border rounded-xl text-sm font-semibold cursor-pointer hover:bg-emerald-600 hover:text-white transition-all hover:scale-109">{items.name}</p>
                ))}
                
             </div>
           </div>
           <div className="flex items-center justify-center mt-10 ">
            <img className="w-120 lg:w-150" src={code} alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
