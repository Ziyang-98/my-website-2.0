import JobTrackShowcase from "assets/projects/jobtrack/jobtrackshowcase.PNG";
import JobTrackLogo from "assets/projects/jobtrack/jobtracklogo.png";
import JavascriptIcon from "assets/logos/language/javascript.png";
import ReactIcon from "assets/logos/framework/react.png";
import NodejsIcon from "assets/logos/framework/nodejs.png";
import MongoDbIcon from "assets/logos/framework/mongodb.PNG";

const JobTrack = {
  title: "Job Track",
  shortDescription: "A web app that makes life easier for any job applicants.",
  image: {
    preview: JobTrackLogo,
    showcases: [{ image: JobTrackShowcase, title: "Main Page" }],
  },
  description: `Job Track is an Single-Page Application that helps users to track their job applications with ease. Instead of using the traditional sheets, users can quickly view, record and update job applications via a minimalistic drag-and-drop interface. Users can sync their data across multiple browsers/device so that job tracking can be performed anywhere with any device.`,
  roles: [
    "Designed and built the user interface with ReactJS",
    "Built the server with NodeJS, ExpressJS with MongoDB as the database",
    "Implemented CI/CD and a serverless function to pull filtered and cleaned API data",
  ],
  links: [
    {
      name: "Project Link",
      link: "https://job-track-9c538.web.app/",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/job-track",
    },
  ],
  techStack: [
    { name: "Javascript", img: JavascriptIcon },
    { name: "ReactJS", img: ReactIcon },
    { name: "NodeJS", img: NodejsIcon },
    { name: "MongoDB", img: MongoDbIcon },
  ],
};

export default JobTrack;
