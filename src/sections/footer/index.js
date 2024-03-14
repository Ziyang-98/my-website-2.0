import React from "react";
import styles from "./index.module.scss";
import { SocialIcon } from "react-social-icons";
import { getLastUpdated } from "commons/utils";

const SocialMediaIcon = ({ url }) => {
  return (
    <SocialIcon
      className={styles["social-media-icon"]}
      bgColor="#055f73"
      fgColor="#6fbbbb"
      href={url}
      url={url}
      target="_blank"
    />
  );
};

const LAST_UPDATED = "2024-03-14T12:33:00.716Z";
export default function Footer() {
  return (
    // <div className={styles["footer-section"]}>
    <div className={styles["footer-section"]}>
      <div className={styles["social-media-holder"]}>
        <h1 className={styles["social-media-name"]}>Lim Zi Yang</h1>
        <h4>limziyang8@gmail.com</h4>
        <div className={styles["social-media-icons-holder"]}>
          <SocialMediaIcon url="https://www.facebook.com/lim.ziyang.12" />
          <SocialMediaIcon url="https://www.linkedin.com/in/zi-yang-lim-a2b651188/" />
          <SocialMediaIcon url="https://github.com/Ziyang-98" />
          <SocialMediaIcon url="https://www.instagram.com/_papergoat_/" />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles["copyright-holder"]}>
        <h4 className={styles.copyright}>&#169; 2024 All Rights Reserved</h4>
        <p>Last Updated {getLastUpdated(LAST_UPDATED)}</p>
      </div>
    </div>
  );
}
