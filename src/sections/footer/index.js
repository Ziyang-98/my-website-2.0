import React from "react";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    // <div className={styles["footer-section"]}>
    <div className={styles["footer-section"]}>
      <div className={styles["social-medias-holder"]}>
        <h1 className={styles.copyright}>Social medias</h1>
      </div>
      <div className={styles.divider} />
      <div className={styles["copyright-holder"]}>
        <h3 className={styles.copyright}>Lim Zi Yang &#169; 2024</h3>
      </div>
    </div>
  );
}
