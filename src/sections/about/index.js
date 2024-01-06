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
    <div
      ref={aboutSectionRef}
      className={styles.aboutSection}
      id="about-section"
    >
      <div className={styles.aboutMeHolder}>
        <Divider />
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.aboutMe}>This is about me</p>
        <div>
          <button
            onClick={scrollIntoPortfolioSection}
            className={styles.button}
          >
            Click Me!
          </button>
        </div>
      </div>
      <div id="avatarHolder" className={styles.avatarHolder}>
        <img src={dp} id="avatar" alt="Avatar" className={styles.avatar} />
      </div>
    </div>
  );
}
