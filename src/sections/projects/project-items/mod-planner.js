import ModPlannerLogo from "assets/projects/modplanner/modplannerlogo.png";
import ModPlannerPreview from "assets/projects/modplanner/modplannerpreview.png";
import HomePageImg from "assets/projects/modplanner/homepage.PNG";
import PlannerPageImg from "assets/projects/modplanner/plannerpage.PNG";
import ExportGuideImg from "assets/projects/modplanner/exportguidepage.PNG";
import ReviewsPageImg from "assets/projects/modplanner/reviewspage.PNG";
import GuidePageImg from "assets/projects/modplanner/guidepage.PNG";
import ForumPageImg from "assets/projects/modplanner/forumpage.PNG";
import CreateQuestionImg from "assets/projects/modplanner/createquestionpage.PNG";
import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";

const Modplanner = {
  title: "The Mod Planner",
  shortDescription:
    "A web app that allows NUS students to plan all their modules " +
    "ahead of time.",
  image: {
    logo: ModPlannerLogo,
    preview: ModPlannerPreview,
    showcases: [
      { image: HomePageImg, title: "Home Page" },
      { image: PlannerPageImg, title: "User's Planner Page" },
      { image: ExportGuideImg, title: "Export Guide Option" },
      { image: ReviewsPageImg, title: "Reviews & Guides Page" },
      { image: GuidePageImg, title: "User's Exported Guide Page" },
      { image: ForumPageImg, title: "Forums Page" },
      { image: CreateQuestionImg, title: "Create Question Page" },
    ],
  },
  description: `The Mod Planner is a web application that helps NUS students to plan their university modules, share their planners as guides, and participate in an online forum to discuss about relevant topics. The project seeks to ease the process of module planning for NUS students. 
  
  (Deployed app is currently inactive due to Heroku's discontinuation of their free service)`,
  roles: [
    "Designed and built the user interface with ReactJS",
    "Added web hooks in the server to push or get data from the MongoDB database",
  ],
  links: [
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/NUS-University-Path-Planner",
    },
  ],
  techStack: [
    { name: "JavaScript", img: JavascriptIcon },
    { name: "React", img: ReactIcon },
    { name: "Node.js", img: NodejsIcon },
    { name: "MongoDB", img: MongoDbIcon },
  ],
};

export default Modplanner;
