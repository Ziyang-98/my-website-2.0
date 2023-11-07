import styles from "./App.module.scss";
import Home from "views/home";
import About from "views/about";
import { useRef } from "react";

function App() {
  const aboutSectionRef = useRef(null);
  const scrollIntoAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Home scrollIntoAboutSection={scrollIntoAboutSection} />
        <About aboutSectionRef={aboutSectionRef} />
      </div>
    </div>
  );
}

export default App;
