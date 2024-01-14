import React from "react";
import styles from "./index.module.scss";
import Divider from "components/divider";
import ProjectGrid from "./components/project-grid";

const content = [1, 2, 3, 4, 5, 6, 7];

export default function Projects() {
  return (
    <div className={styles["projects-section"]}>
      <div className={styles["title-holder"]}>
        <Divider />
        <h2 className={styles.title}>Projects</h2>
      </div>
      <ProjectGrid content={content} />
    </div>
  );
}
