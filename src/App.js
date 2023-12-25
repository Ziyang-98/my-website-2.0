import styles from "./App.module.scss";
import Home from "sections/home";
import About from "sections/about";
import Portfolio from "sections/portfolio";
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
        <About
          aboutSectionRef={aboutSectionRef}
          scrollIntoPortfolioSection={scrollIntoPortfolioSection}
        />
        <Portfolio portfolioSectionRef={portfolioSectionRef} />
      </div>
    </div>
  );
}

export default App;
