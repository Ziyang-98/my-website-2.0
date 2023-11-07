import React from "react";
import styles from "./index.module.scss";
import dp from "assets/images/dp.jpg";

export default function About({ aboutSectionRef }) {
  return (
    <div
      ref={aboutSectionRef}
      className={styles.aboutSection}
      id="about-section"
    >
      <div className={styles.aboutMeHolder}>
        <div className={styles.divider}></div>
        <h2 className={styles.title}>About Me</h2>
        <p>This is about me</p>
      </div>
      <div className={styles.avatarHolder}>
        <img src={dp} alt="Avatar" className={styles.avatar} />
      </div>
    </div>
  );
}
