import {
  tech1,
  prisma,
  sql,
  codesync,
  meditrade,
  crypto,
  netflix,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "S.G.P.A - 8.0",
    icon: tech1,
    iconBg: "#383E56",
    date: "July 2020 - July 2024",
  },
  {
    title: "Intermediate Education",
    company_name: "Percentage - 73.2 %",
    icon: tech1,
    iconBg: "#E6DEDD",
    date: "Mar 2018 - Apr 2019",
  },
  {
    title: "High School Education",
    company_name: "Percentage - 79.0",
    icon: tech1,
    iconBg: "#383E56",
    date: "Mar 2016 - Apr 2017",
  },
];

const projects = [
  {
    name: "Code Sync",
    description:
      "Engineered a real-time collaborative code editor using Monaco Editor and Socket.io, enabling seamless multi-user synchronization of code and settings, subsequently increasing team coding efficiency by 40%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: codesync,
    source_code_link: "https://github.com/DivyanshGupta-07/Code-Sync",
  },
  {
    name: "Medi-Trade",
    description:
      "Developed MediTrade, a web-based platform enabling medical shop owners to efficiently manage medicine related operations with a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: meditrade,
    source_code_link: "https://github.com/DivyanshGupta-07/MediTrade",
  },
  {
    name: "Info Crypt",
    description:
      "Innovated InfoCrypt, integrating dynamic graphs and charts boosted user retention by 40% and expanded database to include 200+ cryptocurrencies and 150 exchanges",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakraUI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/DivyanshGupta-07/Crypto-Tracking",
  },
  {
    name: "Netflix UI",
    description:
      "Created Netflix clone using the MERN stack and Firebase. Implemented user authentication with Firebase, ensuring secure access and personalized user experiences",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/DivyanshGupta-07/Netflix-Frontend",
  },
];

export { services, technologies, experiences, projects };
