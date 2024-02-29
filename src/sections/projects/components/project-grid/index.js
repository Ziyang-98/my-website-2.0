import React from "react";

import styles from "./index.module.scss";
import ProjectCard from "../project-card";
import useProjects from "sections/projects/hooks/useProjects";
import Modal from "../modal";

export default function ProjectGrid({ content }) {
  const {
    isModalActive,
    expanded,
    expandCard,
    closeCard,
    previewContent,
    currentExpandedContent,
  } = useProjects();
  return (
    <div className={styles["grid-container"]}>
      <Modal isModalOpen={isModalActive}>
        <p>{currentExpandedContent}</p>
        <button className={styles["close-button"]} onClick={closeCard}>
          <p>Close</p>
        </button>
      </Modal>
      {content.map((c, i) => (
        <ProjectCard
          key={i}
          className={`${styles["grid-item"]}`}
          isExpanded={expanded === i}
          previewContent={previewContent[i]}
          expandCard={() => expandCard(i)}
        />
      ))}
    </div>
  );
}