import React from "react";
import styles from "./index.module.scss";
import dp from "assets/images/dp.jpg";
import { useTiltingAvatar } from "./hooks/use-tilting-avatar";

export default function About({ aboutSectionRef }) {
  useTiltingAvatar();

  return (
    <div
      ref={aboutSectionRef}
      className={styles.aboutSection}
      id="about-section"
    >
      <div className={styles.aboutMeHolder}>
        <div className={styles.divider}></div>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.aboutMe}>This is about me</p>
      </div>
      <div id="avatarHolder" className={styles.avatarHolder}>
        <img src={dp} id="avatar" alt="Avatar" className={styles.avatar} />
      </div>
    </div>
  );
}
