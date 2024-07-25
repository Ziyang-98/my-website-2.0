import { useRef } from "react";

export default function useScroll() {
  const aboutSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);

  const scrollIntoSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollIntoAboutSection = () => {
    scrollIntoSection(aboutSectionRef);
  };

  const scrollIntoPortfolioSection = () => {
    scrollIntoSection(portfolioSectionRef);
  };

  return {
    aboutSectionRef,
    portfolioSectionRef,
    scrollIntoAboutSection,
    scrollIntoPortfolioSection,
  };
}
