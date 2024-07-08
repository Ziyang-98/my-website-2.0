import React from "react";

import styles from "./index.module.scss";
import ProjectCard from "../project-card";
import useProjects from "sections/projects/hooks/use-projects";
import Modal from "../modal";
import ProjectContent from "../project-content";

export default function ProjectGrid({ content }) {
  const {
    expanded,
    expandCard,
    closeCard,
    previewContent,
    currentExpandedContent,
  } = useProjects();
  return (
    <div className={styles["grid-container"]}>
      <Modal>
        <ProjectContent currentExpandedContent={currentExpandedContent} />
        <button className={styles["close-button"]} onClick={closeCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // className={`${styles["exit-btn"]}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            height="100%"
            width="100%"
          >
            <path
              fillRule="evenodd"
              d="M13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 1 0 1.414-1.414L13.414 12z"
            />
          </svg>
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
