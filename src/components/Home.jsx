import React from "react";
import Navber from "./Navber";
import Info from "./Info";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navber />
      <div className="pt-20">
        <section id="home" className="scroll-mt-40">
          {" "}
          <Info />
        </section>
        <section id="about" className="scroll-mt-30">
          {" "}
          <About />
        </section>
        <section id="project" className="scroll-mt-30">
          {" "}
          <Project />
        </section>
        <section id="contact" className="scroll-mt-30">
          {" "}
          <Contact />
          <img src="" alt="" />
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
