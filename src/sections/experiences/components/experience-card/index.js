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
    <div className={styles["card-container"]}>
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
        onClick={() => setIsFlipped((isFlipped) => !isFlipped)}
      >
        <div className={styles["card-front"]}>
          <header className={styles["card-header"]}>
            <h2 className={styles["card-title"]}>{jobTitle}</h2>
            <p className={styles["card-subtitle"]}>{company}</p>
          </header>
          <p className={styles["card-description"]}>{description}</p>
        </div>

        <div className={styles["card-back"]}>
          <h2 className={styles["card-back-title"]}>Fun Fact</h2>
          <div className={styles["card-back-divider"]} />
          <p className={styles["card-back-funfact"]}>{funFact}</p>
        </div>
      </div>
    </div>
  );
}
