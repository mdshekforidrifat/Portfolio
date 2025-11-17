import React from "react";
import data from "../add.js";

const Project = () => {
  return (
    <div className="w-full min-h-[200px] mt-20 lg:mt-30">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-xl lg:text-3xl font-bold text-emerald-600 relative inline-block group">
            Project
            <span className="absolute -translate-x-1/2 left-1/2 -bottom-1 w-1/3  h-[3px] bg-black rounded-md"></span>
          </h2>
        </div>
        <div className="mt-10 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
          {data.project.map((items, index) => (
            <div
              key={index}
              className="w-80 lg:w-90 p-5 border drop-shadow-lg hover:scale-103 rounded-2xl transition"
            >
              <img className="rounded-2xl" src={items.img} alt="project img" />
              <h1 className="text-lg lg:text-2xl text-center m-2 lg:m-4 font-semibold">
                {items.title}
              </h1>
              <p className="text-[12px] lg:text-sm tracking-tight text-neutral-600">
                {items.description}
              </p>
              <div className=" flex flex-wrap justify-center space-x-1 mt-3">
                {items.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="hover:bg-emerald-500 transition-all  cursor-pointer hover:border-none hover:text-white font-semibold px-3 py border rounded-xl text-[10px] lg:text-[15px]"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex space-x-2 justify-center mt-4">
                <button className="hover:scale-96 transition hover:bg-emerald-600 px-4 py-1  rounded-2xl text-sm text-white bg-emerald-500 font-semibold">
                  <a href={items.live}>Live Demo</a>
                </button>
                <button className="hover:scale-96 transition hover:bg-black hover:text-white px-4 py-1 border rounded-2xl text-sm   font-semibold">
                  <a href={items.demoCode}>Demo Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
