import {
  backend,
  bimroom,
  carrent,
  creator,
  css,
  daniel,
  docker,
  figma,
  git,
  html,
  javascript,
  makanmanager,
  mobile,
  mongodb,
  netsol,
  nodejs,
  paperboyz,
  python,
  reactjs,
  redux,
  softthrive,
  surfeye,
  tailwind,
  threejs,
  typescript,
  web,
  webcoin,
  winxware
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FULL STACK DEVELOPER",
    company_name: "NETSOL TECHNOLOGIES LTD.",
    icon: netsol,
    iconBg: "#383E56",
    date: "2022(Nov)–Present",
    points: [
      "Worked as Full Stack Engineer with a team of 60+ developers.",
      "Successfully created micro services architecture in python Fastapi.",
      "Deployed micro services on AWS lambda.",
      "Worked on Microsoft Azure for version control and repositories",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN STACK DEVELOPER",
    company_name: "SOFTTHRIVE",
    icon: softthrive,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Creating servers and databases for functionality",
      "Designing and developing APIs",
      "Stripe , PayPal payment gateway integration",
    ],
  },
  {
    title: "Reactjs Developer",
    company_name: "WINX WARE TECHNOLOGIES",
    icon: winxware,
    iconBg: "#383E56",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Learned and Practised variety of web technologies.",
      "Attended several on site workshops.",
      "Developed Final Internship Project under guidance of tech experts using MERN-Stack.",
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
    name: "SurfEye",
    description:
      "Surf first, download your videos later. Recording every day, no booking. Try now in Costa da Caparica, Portugal.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: surfeye,
    source_code_link: "https://surfeye.video",
  },
  {
    name: "PaperBoyz",
    description:
      "Web App where you can Mint your NFTS and make transactions by connecting your wallet",
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
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: paperboyz,
    source_code_link: "https://mint.paperboyz.com/",
  },
  {
    name: "WebCoin",
    description:
      "Make Your Crypto Transaction Easier. Learning how cryptocurrency works is like learning a new language.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
    ],
    image: webcoin,
    source_code_link: "https://web-coin.netlify.app/home",
  },
  {
    name: "Bimroom",
    description:
      "Bimroom is a premium BIM object library to supply your project with digital products available.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "algolia",
        color: "pink-text-gradient",
      },
    ],
    image: bimroom,
    source_code_link: "https:bimifyalgolia.netlify.app",
  },
  {
    name: "MakanManager",
    description:
      "Web Based Application to buy, sell and track you real estate properties.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: makanmanager,
    source_code_link: "https://makan-manager.vercel.app",
  },
  {
    name: "DanielVlad",
    description: "DanielVlad Portfolio Web Page",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: daniel,
    source_code_link: "https://danielvlad.com",
  },
];

export { experiences, projects, services, technologies, testimonials };

