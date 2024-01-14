import React from "react";

import styles from "./index.module.scss";
import ProjectCard from "../project-card";

export default function ProjectGrid({ content }) {
  return (
    <div className={styles["grid-container"]}>
      {content.map((c, i) => (
        <ProjectCard key={i} className={styles["grid-item"]} content={c} />
      ))}
    </div>
  );
}
