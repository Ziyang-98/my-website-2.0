import React from "react";
import styles from "./index.module.scss";

export default function ProjectCard({ className, content }) {
  return (
    <div className={`${className} ${styles["project-card"]}`}>
      <div className={styles["project-card-inner"]}>
        <div className={styles["project-card-front"]}>Front</div>
        <div className={styles["project-card-back"]}>Back</div>
      </div>
    </div>
  );
}
