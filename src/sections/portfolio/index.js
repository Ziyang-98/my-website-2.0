import React from "react";
import styles from "./index.module.scss";
import Divider from "components/divider";
import Shopee from "./experiences/shopee";
import DSTA from "./experiences/dsta";
import RDC from "./experiences/rdc";
import Frank from "./experiences/frank";
import IRAS from "./experiences/iras";
import CS2030STA from "./experiences/cs2030TA";
import CS2030TA from "./experiences/cs2030sTA";
import ExperienceCard from "./components/experience-card";

const experiences = [DSTA, Shopee, RDC, Frank, IRAS, CS2030STA, CS2030TA];

export default function Portfolio({ portfolioSectionRef }) {
  return (
    <div ref={portfolioSectionRef} className={styles.portfolio} id="portfolio">
      {/* <Carousel height="60vh" width="60vw">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel> */}
      <div className={styles["title-holder"]}>
        <Divider />
        <h2 className={styles.title}>Experiences</h2>
      </div>
      <ol className={styles.timeline}>
        {experiences.map((exp, index) => (
          <li className={styles["timeline-item"]} key={index}>
            <div className={styles["timeline-content"]}>
              <ExperienceCard {...exp} />
            </div>
            <time className={styles["timeline-duration"]}>{exp.duration}</time>
          </li>
        ))}
      </ol>
    </div>
  );
}
