import { faCode, faCodeBranch, faNetworkWired, faTerminal } from '@fortawesome/free-solid-svg-icons'

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  aws,
  docker,
  ornus,
  ucla,
  cisco,
  threejs,
  website,
  ocean,
  coming,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: faCode,
  },
  {
    title: "Python Developer",
    icon: faCodeBranch,
  },
  {
    title: "Backend Developer",
    icon: faTerminal,
  },
  {
    title: "Cloud Developer",
    icon: faNetworkWired,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Oracle Database Administrator",
    company_name: "Ornus Capital",
    icon: ornus,
    iconBg: "#ffffff",
    date: "January 2020 - April 2021",
    points: [
      "Built an SQL infrastructure for the company, managing data entry into databases via lamda functions.",
      "Queried databases for specific uses such as ML Modeling. Primary experience in oracle SQL.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "UCLA",
    icon: ucla,
    iconBg: "#2b73b2",
    date: "Jan 2021 - June 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#0c244b",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ocean Cube",
    description:
      "A simple cube rotating in the ocean built using three js. A showcase of lighting, textures, and variaible manipulation, this project demonstrates my ability to create beautiful scenes with interactive and responsive UI.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
    ],
    image: ocean,
    source_code_link: "https://github.com/Atwolf/Ocean_demo",
    live_demo_link: "https://atwolf.github.io/Ocean_demo/",
  },
  {
    name: "Portfolio Website",
    description:
      "Website to display my Portfolio created using a combination of react, tailwind-css, and css-3. The website takes into consideration numerous design principles as well as a 'simpler is better' modern approach to providing information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/",
    live_demo_link: "https://aakashtammana.com/",
  },
  {
    name: "TBD",
    description:
      "A project I am currently working on that will utilize react to present the user with an interactable interface which they can use to build and customize miniature applications. The frontend uses react/tailwind-css with a MongoDB backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: coming,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
