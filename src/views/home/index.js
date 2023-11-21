import React from "react";
import styles from "./index.module.scss";
import { smoothScrollTo } from "commons/utils";

export default function Home({ scrollIntoAboutSection }) {
  const handleScrollToAbout = () => {
    const target = document.querySelector("#about-section");
    const duration = 1000;
    smoothScrollTo(target, duration);
  };

  return (
    <div className={styles.homeSection}>
      <span className={styles.name}>LIM ZI YANG</span>
      <span className={styles.title}>
        <p className={styles.titleText}>
          I am a <span className={styles.persona} />
        </p>
      </span>
      <button onClick={handleScrollToAbout} className={styles.button}>
        Click Me!
      </button>
    </div>
  );
}
