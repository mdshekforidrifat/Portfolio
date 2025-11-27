const Skill = [
  {
    img: html
  },
  {
    img: css
  },
  {
    img: javascript
  },
  {
    img: tailwindcss
  },
  {
    img: react
  },
  {
    img: nodejs
  },
  {
    img: express
  },
  {
    img: db
  },
  {
    img: git
  },
];

import html from "./assets/html.png"
import css from "./assets/css.png"
import javascript from "./assets/javascript.png"
import tailwindcss from "./assets/tailwindcss.png"
import react from "./assets/react.png"
import nodejs from "./assets/nodejs.png"
import express from "./assets/express.png"
import db from "./assets/db.png"
import git from "./assets/git.png"




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
  {
    img: img1,
    title: " Mern Chat App (pending)",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos modi officia aut, ullam doloribus id in repellat quaerat explicabo illo corporis, dolore fugiat exercitationem. Ad voluptatibus nobis voluptas! Magni, enim.",
    live: "",
    demoCode: "",
    tags: ["React", "Tailwind css" , "nodejs" , "expressjs","mongodb"],
  },
  
];

// Provide named exports for consumers that import { Skill } or { project }
export { Skill, project };

// Keep default export for existing default-imports
export default { Skill, project };
