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
      <h1 className={styles.title}>Welcome</h1>
      <button onClick={handleScrollToAbout} className={styles.button}>
        Click Me!
      </button>
    </div>
  );
}
