import React from "react";

import styles from "./index.module.scss";
import ProjectCard from "../project-card";
import useProjects from "sections/projects/hooks/use-projects";
import Modal from "../modal";
import ProjectContent from "../project-content";

export default function ProjectGrid() {
  const {
    isModalActive,
    expanded,
    expandCard,
    closeCard,
    projects,
    currentProject,
  } = useProjects();
  return (
    <div className={styles["grid-container"]}>
      <Modal closeModal={closeCard} enableCloseButton={false}>
        {isModalActive && <ProjectContent project={currentProject} />}
      </Modal>

      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          isExpanded={expanded === i}
          project={project}
          expandCard={() => expandCard(i)}
        />
      ))}
    </div>
  );
}
