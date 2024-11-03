import CoralReefPreview from "assets/projects/coralreef/coralreefpreview.PNG";
import LandingPageImg from "assets/projects/coralreef/landingpage.PNG";
import OptionsImg from "assets/projects/coralreef/optionspage.PNG";
import SelectionPageImg from "assets/projects/coralreef/selectionpage.PNG";
import ResultPageImg from "assets/projects/coralreef/resultpage.PNG";
import ProfilePageImg from "assets/projects/coralreef/profilepage.PNG";
import LoginPageImg from "assets/projects/coralreef/loginpage.PNG";
import AdminPageImg from "assets/projects/coralreef/adminpage.PNG";
import EditSpeciesImg from "assets/projects/coralreef/editspeciespage.PNG";

import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import FirebaseIcon from "assets/logos/framework/firebase.png";

const CoralReefConservation = {
  title: "Coral Reef Conservation",
  shortDescription:
    "A Coral Reef species library with filtering and priorization for Coral Transplantation.",
  image: {
    preview: CoralReefPreview,
    showcases: [
      { image: LandingPageImg, title: "Landing Page" },
      { image: OptionsImg, title: "Preset Options" },
      { image: SelectionPageImg, title: "Custom Selection Page" },
      { image: ResultPageImg, title: "Results Page" },
      { image: ProfilePageImg, title: "Species Profile Page" },
      { image: LoginPageImg, title: "Admin Login Page" },
      { image: AdminPageImg, title: "Admin Main Page" },
      { image: EditSpeciesImg, title: "Admin Update Specimen Page" },
    ],
  },
  description: `Coral Reef Conservation is an app that is designed to ease the transplantation process of corals by educating users on the appropriate criterias produced by the Reef Ecology Lab, NUS.
    
    The app also comes with a data management system for the marine biologists in Reef Ecology Lab to update the information in the app.`,
  roles: [
    "Designed the user interface and the model schemas of the database",
    "Developed the user interface of the results page with ReactJS",
    "Implemented a multi-criteria priority sorting algorithm to filter results",
  ],
  links: [
    {
      name: "Project Link",
      link: "https://coral-2fea3.web.app/home",
    },
  ],
  techStack: [
    { name: "JavaScript", img: JavascriptIcon },
    { name: "React", img: ReactIcon },
    { name: "Firebase", img: FirebaseIcon },
  ],
};

export default CoralReefConservation;
