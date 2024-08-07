import FlowforgePreview from "assets/projects/flowforge/flowforgepreview.png";
import LoginPageImg from "assets/projects/flowforge/loginpage.png";
import FirstTimeUserPopupImg from "assets/projects/flowforge/firsttimeuserpopup.png";
import SelectOrganizationPageImg from "assets/projects/flowforge/selectorganizationpage.png";
import ServiceCatalogPageImg from "assets/projects/flowforge/servicecatalogpage.png";
import CreateServicePageImg from "assets/projects/flowforge/createservicepage.png";
import CreateServiceRequestImg from "assets/projects/flowforge/createservicerequestpage.png";
import ServiceRequestDashboardPageImg from "assets/projects/flowforge/servicerequestdashboardpage.png";
import ServiceRequestLogsPageImg from "assets/projects/flowforge/servicerequestlogspage.png";
import OrganizationSettingsPageImg from "assets/projects/flowforge/organizationsettingspage.png";

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
    showcases: [
      { image: LoginPageImg, title: "Login Page" },
      { image: FirstTimeUserPopupImg, title: "First Time User Popup" },
      { image: SelectOrganizationPageImg, title: "Select Organization Page" },
      { image: ServiceCatalogPageImg, title: "Service Catalog Page" },
      { image: CreateServicePageImg, title: "Create Service Page" },
      { image: CreateServiceRequestImg, title: "Create Service Request" },
      {
        image: ServiceRequestDashboardPageImg,
        title: "Service Request Dashboard",
      },
      { image: ServiceRequestLogsPageImg, title: "Service Request Logs" },
      { image: OrganizationSettingsPageImg, title: "Organization Settings" },
    ],
  },
  description: `Flowforge is a minimalistic web application that serves as a service request management system. The project aims to help teams or organizations with little developer resources to easily create service pipelines and automate service request fulfilment.
  
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
