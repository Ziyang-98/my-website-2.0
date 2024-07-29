import React from "react";
import styles from "./index.module.scss";
import dp from "assets/images/dp.jpg";
import useAnimationAvatar from "./hooks/use-animation-avatar";
import Divider from "components/divider";
import ThemedButton from "components/themed-button";

export default function About({ aboutSectionRef, scrollIntoPortfolioSection }) {
  const hasTilt = true;
  const hasSpin = false;
  useAnimationAvatar(hasTilt, hasSpin);

  return (
    <div ref={aboutSectionRef} className={styles.about} id="about-section">
      <div className={styles["title-holder"]}>
        <Divider />
        <h2 className={styles.title}>About Me</h2>
      </div>
      <div className={styles["content-holder"]}>
        <div className={styles["about-me-container"]}>
          <p className={styles["text-container"]}>
            Hi there, I'm <span className={styles["name"]}>Lim Zi Yang</span>{" "}
            and welcome to my site! I am an apsiring full stack web developer
            and I love to work on fun stuff. Check out my experiences and
            projects below!
          </p>
          <ThemedButton onClick={scrollIntoPortfolioSection} size={"medium"} />
        </div>
        <div id="avatarHolder" className={styles["avatar-container"]}>
          <img src={dp} id="avatar" alt="Avatar" className={styles.avatar} />
        </div>
      </div>
    </div>
  );
}
