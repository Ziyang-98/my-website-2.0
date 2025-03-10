import React from "react";
import styles from "./index.module.scss";
import Divider from "components/divider";
import Airwallex from "./experience-items/airwallex";
import Shopee from "./experience-items/shopee";
import DSTA from "./experience-items/dsta";
import RDC from "./experience-items/rdc";
import Frank from "./experience-items/frank";
import IRAS from "./experience-items/iras";
import CS2030STA from "./experience-items/cs2030sTA";
import CS2030TA from "./experience-items/cs2030TA";
import ExperienceCard from "./components/experience-card";

const experiences = [
  Airwallex,
  DSTA,
  Shopee,
  RDC,
  Frank,
  IRAS,
  CS2030STA,
  CS2030TA,
];

export default function Experiences({ experiencesSectionRef }) {
  return (
    <div
      ref={experiencesSectionRef}
      className={styles.experiences}
      id="experiences"
    >
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
