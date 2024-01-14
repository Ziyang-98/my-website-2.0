import React from "react";
import styles from "./index.module.scss";

export default function ProjectCard({
  className,
  isExpanded,
  previewContent,
  expandCard,
}) {
  return (
    <div
      className={`${className} ${styles["project-card"]}`}
      onClick={() => {
        if (!isExpanded) {
          expandCard();
        }
      }}
    >
      <div className={`${styles["project-card-inner"]}`}>
        <div className={styles["project-card-content"]}>{previewContent}</div>
      </div>
    </div>
  );
}
