import FlowforgePreview from "assets/projects/flowforge/flowforgepreview.png";

import TypescriptIcon from "assets/logos/language/typescript.png";
import TailwindCSSIcon from "assets/logos/framework/tailwindcss.png";
import NextJSIcon from "assets/logos/framework/nextjs.png";
import GolangIcon from "assets/logos/framework/golang.png";

const Flowforge = {
  title: "Flowforge",
  shortDescription:
    "A flexible service request management system for organizations with minimal resources.",
  image: {
    preview: FlowforgePreview,
    showcases: [],
  },
  description: `Flowforge is a web application that is built with NextJS and Golang.

  As a service request management system, Flowforge project aims to help teams or organizations with little developer resources to easily create service pipelines and automate service request fulfilment.
  
  Features of Flowforge includes: 
  - Simplified Pipeline & Form Creation
  - Service Request Management System
  - Organization Management System.
  `,
  roles: [
    "Developed and managed the frontend application",
    "Designed a minimalistic user interface for the frontend application",
    "Designed and implemented APIs in backend Go server",
  ],
  links: [
    {
      name: "Repository",
      link: "https://github.com/joshtyf/flowforge",
    },
  ],
  techStack: [
    { name: "Typescript", img: TypescriptIcon },
    { name: "NextJs", img: NextJSIcon },
    { name: "TailwindCSS", img: TailwindCSSIcon },
    { name: "Golang", img: GolangIcon },
  ],
};

export default Flowforge;
