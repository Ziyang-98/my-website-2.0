import React from "react";
import styles from "./index.module.scss";
import ThemedButton from "components/themed-button";

export default function Home({ scrollIntoAboutSection }) {
  // const handleScrollToAbout = () => {
  //   const target = document.querySelector("#about-section");
  //   const duration = 1000;
  //   smoothScrollTo(target, duration);
  // };

  return (
    <div className={styles.homeSection}>
      <span className={styles.name}>LIM ZI YANG</span>
      <span className={styles.title}>
        <p className={styles.titleText}>
          I <span className={styles.persona} />
        </p>
      </span>
      <ThemedButton onClick={scrollIntoAboutSection} size={"large"} />
    </div>
  );
}
