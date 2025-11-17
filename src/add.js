const Skill = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JAVASCRIPT",
  },
  {
    name: "REACT",
  },
  {
    name: "TAILWIND CSS",
  },
  {
    name: "NODE JS",
  },
  {
    name: "EXPRESS JS",
  },
  {
    name: "MOONGO DB",
  },
  {
    name: "GIT",
  },
];

import img1 from "./assets/project1.png"

const project = [
  {
    img: img1,
    title: "Resturant landing page",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos modi officia aut, ullam doloribus id in repellat quaerat explicabo illo corporis, dolore fugiat exercitationem. Ad voluptatibus nobis voluptas! Magni, enim.",
    live: "https://shekdine.netlify.app/",
    demoCode: "https://github.com/mdshekforidrifat/shekDine-Restaurant-Web",
    tags: ["React", "Tailwind css"],
  },
  
];

// Provide named exports for consumers that import { Skill } or { project }
export { Skill, project };

// Keep default export for existing default-imports
export default { Skill, project };
