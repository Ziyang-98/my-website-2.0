import { useState } from "react";
import styles from "./index.module.scss";

export default function ExperienceCard({
  jobTitle,
  company,
  description,
  funFact,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={(isFlipped) => setIsFlipped(!isFlipped)}
    >
      <div className={styles["card-front"]}>
        <header className={styles["card-header"]}>
          <h2 className={styles["card-title"]}>{jobTitle}</h2>
          <p className={styles["card-subtitle"]}>{company}</p>
        </header>
        <var className={styles["card-description"]}>{description}</var>
      </div>

      {/* 
      TODO: Add flip back functionality
      <div className={styles["card-back"]}>
        <header>
          <h2>{jobTitle}</h2>
          <p>{company}</p>
        </header>
        <p>{funFact}</p>
      </div> */}
    </div>
  );
}
