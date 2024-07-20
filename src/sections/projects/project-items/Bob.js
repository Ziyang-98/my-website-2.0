import BobPreview from "assets/projects/bob/bobpreview.PNG";
import BobShowcase from "assets/projects/bob/bobshowcase.PNG";
import JavaIcon from "assets/logos/language/java.png";
import JavaFXIcon from "assets/logos/framework/javafx.PNG";
import GradleIcon from "assets/logos/framework/gradle.png";

const Bob = {
  title: "Bob",
  shortDescription:
    "A Java bot app that allows users to manages tasks, events and deadlines.",
  image: {
    logo: null,
    preview: BobPreview,
    showcases: [{ image: BobShowcase, title: "Bob's UI" }],
  },
  previewSize: {
    width: "60%",
    height: "50%",
  },
  showcaseSizes: {
    large: { width: "400px", height: "600px" },
    medium: { width: "400px", height: "600px" },
    small: { width: "300px", height: "500px" },
  },
  description:
    "Bob is a command-line based bot that keeps track of the user's tasks, events " +
    "and deadlines through conversations. Features include a variety of commands that " +
    "allow users to manage their tasks in an optimal environment for CLI. " +
    "This greenfield individual project is based on a software engineering module, CS2103T, in NUS.",
  roles: ["Designed, developed and integrated the application"],
  links: [
    {
      name: "Project Info",
      link: "https://ziyang-98.github.io/ip/",
    },
    {
      name: "Project Link",
      link: "https://github.com/Ziyang-98/ip/releases/tag/A-Release",
    },
    {
      name: "Repository",
      link: "https://github.com/Ziyang-98/ip/",
    },
  ],
  techStack: [
    { name: "Java", img: JavaIcon },
    { name: "JavaFX", img: JavaFXIcon },
    { name: "Gradle", img: GradleIcon },
  ],
};

export default Bob;
