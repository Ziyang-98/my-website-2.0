import React from "react";
import styles from "./index.module.scss";
import dp from "assets/images/dp.jpg";
import useAnimationAvatar from "./hooks/use-animation-avatar";
import Divider from "components/divider";

export default function About({ aboutSectionRef, scrollIntoPortfolioSection }) {
  const hasTilt = true;
  const hasSpin = false;
  useAnimationAvatar(hasTilt, hasSpin);

  // const handleScrollToPortfolio = () => {
  //   const target = document.querySelector("#portfolio");
  //   const duration = 1000;
  //   smoothScrollTo(target, duration);
  // };

  return (
    <div ref={aboutSectionRef} className={styles.about} id="about-section">
      <div className={styles["title-holder"]}>
        <Divider />
        <h2 className={styles.title}>About Me</h2>
      </div>
      <div className={styles["content-holder"]}>
        <div className={styles["about-me-container"]}>
          <p className={styles["text-container"]}>
            Hi there! My name is <b>Lim Zi Yang</b> and I am a software engineer
            working at DSTA.
          </p>
          <button
            onClick={scrollIntoPortfolioSection}
            className={styles.button}
          >
            Click Me!
          </button>
        </div>
        <div id="avatarHolder" className={styles["avatar-container"]}>
          <img src={dp} id="avatar" alt="Avatar" className={styles.avatar} />
        </div>
      </div>
    </div>
  );
}
