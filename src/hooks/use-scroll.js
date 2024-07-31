import { useRef } from "react";

export default function useScroll() {
  const aboutSectionRef = useRef(null);
  const experiencesSectionRef = useRef(null);

  const scrollIntoSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollIntoAboutSection = () => {
    scrollIntoSection(aboutSectionRef);
  };

  const scrollIntoExperiencesSection = () => {
    scrollIntoSection(experiencesSectionRef);
  };

  return {
    aboutSectionRef,
    experiencesSectionRef,
    scrollIntoAboutSection,
    scrollIntoExperiencesSection,
  };
}
