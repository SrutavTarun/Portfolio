
import {
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
    figma,
    docker,
    drishti,
    eeti,
    ieee,
    tinkerhub,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
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
      title: "Project Volunteer",
      company_name: "Drishti '22",
      icon: drishti,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Served as volunteer for the 'Drishti Project Committee' event held in our campus during 24,24 and 26th of June 22 as part of Drishti '22.",
      ],
    },
    {
      title: "Web team",
      company_name: "EETI",
      icon: eeti,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Part of EETI web team",
      ],
    },
    {
      title: "Web team",
      company_name: "IEEE SB CET",
      icon: ieee,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Part of IEEE SB CET web team.",
      ],
    },
    {
      title: "Javascript Mentor",
      company_name: "Maker Stations, Tinkerhub",
      icon: tinkerhub,
      iconBg: "#E6DEDD",
      date: "June 2023",
      points: [
        "Mentor for Javascript stack for Maker Stations event held in ourcampus by Tinkerhub.",
        "Students from various colleges participated in the event.",
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
      name: "Forest Fire Predictor",
      description:
        "This is a machine learning project, that can predict the probability of occurrence of forest fire events by analysing weather data and Oxygen Concentration in the atmosphere in a specific area.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "PYTHON",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SrutavTarun/Hacksquad-3.0",
    },
    {
      name: "Webclipper",
      description:
        "Smart bookmarker that can be used to mark a specific part in a website and later return to that specific spot when needed.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SrutavTarun/WebClipper",
    },
    {
      name: "iCode",
      description:
        "This project is in its initial stages.",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "TAILWIND",
          color: "green-text-gradient",
        },
        {
          name: "NODEJS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SrutavTarun/iCode_nodejs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };