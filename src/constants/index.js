import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  sws,
  esolution,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rubyonrails,
  postgresql,
  bootstrap,
  angular,
  nextjs,
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
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UX Designer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Ruby on Rails",
    icon: rubyonrails,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "SWS IT Solution",
    company_link: "https://www.swstechno.com",
    icon: sws,
    iconBg: "#383E56",
    date: "September 2022 - March 2023",
    points: [
      "Designed and built an entire mobile-repsonsive e-obituary Single Page Application in Angular and Ionic that allows users to create highly-customizable digital obituaries based on users' cultures and religions.",
      "Developed main features including: JWT user authentication, funeral service management, e-obituary generation, e-commerce system, payment gateway (iPay88, PayPal) and i18n multi-language support.",
      "Closely collaborated with a small team for the integration of RESTful backend service API and discussions of user requirements documentation in sprint cycles.",
      "Implemented Deep Nostalgia, an AI service that turns portrait photos into animated image as one of the USP.",
      "Performed user acceptance testing with the stakeholders and quickly resolve issues raised in a limited timeframe.",
      "Supported debugging before the production stage while reviewing codebase to improve Web Vitals performance.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "eSolution Technology",
    company_link: "https://esolution.my/",
    icon: esolution,
    iconBg: "#E6DEDD",
    date: "March 2021 - August 2021",
    points: [
      "Developed features for the company's ERP system in Ruby on Rails and SQL, specializing in generating business documents by enabling customized format document printing, streamlining internal management processes for various local industries.",
      "Conducted QA process such as API testing using Postman and technical documentation in the development of a mobile application to ensure seamless integration and functionality between web and mobile platform.",
      "Created user manuals (written documents and instructional videos) to guide clients in effectively using the company's applications.",
      "Assisted in guiding newly hired working partner",
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
    name: "E-Obituary",
    description:
      "A mobile responsive web app that allows users to create highly customizable obituaries, purchase condolence gifts, manage funerals' schedules and visitors, upload their memories of their late loved ones. ",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ionic",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pure Nature Learning",
    description:
      "A brochure website for an education startup to promote its philosophy in nature learning and further connect the parents ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pest Categorization App",
    description:
      "A simple mobile application based on an AI model, MobileNet-v2 microtuned to classify species of pest images taken from device camera under 10 seconds. The app is operated locally without internet to protect users' privacy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "green-text-gradient",
      },
      {
        name: "tensorflowjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
