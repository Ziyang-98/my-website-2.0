import styles from "./App.module.scss";
import Home from "sections/home";
import About from "sections/about";
import Experiences from "sections/experiences";
import Projects from "sections/projects";
import Footer from "sections/footer";

import useScroll from "hooks/use-scroll";

function App() {
  const {
    aboutSectionRef,
    experiencesSectionRef,
    scrollIntoAboutSection,
    scrollIntoExperiencesSection,
  } = useScroll();

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Home scrollIntoAboutSection={scrollIntoAboutSection} />
        <About
          aboutSectionRef={aboutSectionRef}
          scrollIntoExperiencesSection={scrollIntoExperiencesSection}
        />
        <Experiences experiencesSectionRef={experiencesSectionRef} />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
