import React from "react";
import styles from "./index.module.scss";
import ThemedButton from "components/themed-button";

export default function ProjectCard({ isExpanded, project, expandCard }) {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-img-holder"]}>
        <img
          className={styles["project-card-img"]}
          alt="sample"
          src={project.image.preview}
          width={project.previewSize.width}
          height={project.previewSize.height}
        />
      </div>
      <div className={styles["project-info-holder"]}>
        <h2 className={styles["project-card-title"]}>{project.title}</h2>
        <p className={styles["project-card-description"]}>
          {project.shortDescription}
        </p>
        <ThemedButton
          onClick={() => {
            if (!isExpanded) {
              expandCard();
            }
          }}
          size={"small"}
          text="Learn More"
          className={styles["project-card-button"]}
        />
      </div>
    </div>
  );
}
