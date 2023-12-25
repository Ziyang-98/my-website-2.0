import React from "react";
import styles from "./index.module.scss";
import ProjectCard from "./components/project-card";

const content = [1, 2, 3, 4, 5, 6, 7];

export default function Projects() {
  return (
    <div className={styles["projects-section"]}>
      <div className={styles["grid-container"]}>
        {content.map((c, i) => (
          <ProjectCard key={i} className={styles["grid-item"]} content={c} />
        ))}
      </div>
    </div>
  );
}
