import styles from "./App.module.scss";
import Home from "views/home";
import About from "views/about";
import Portfolio from "views/portfolio";
import useScroll from "hooks/useScroll";

function App() {
  const {
    aboutSectionRef,
    scrollIntoAboutSection,
    scrollIntoPortfolioSection,
    portfolioSectionRef,
  } = useScroll();

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Home scrollIntoAboutSection={scrollIntoAboutSection} />
        <About aboutSectionRef={aboutSectionRef} />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
