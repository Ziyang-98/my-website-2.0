import React from "react";

import styles from "./index.module.scss";
import ProjectCard from "../project-card";
import useProjects from "sections/projects/hooks/use-projects";
import Modal from "../modal";
import ProjectContent from "../project-content";

export default function ProjectGrid() {
  const { expanded, expandCard, closeCard, projects, currentProject } =
    useProjects();
  console.log(currentProject);
  return (
    <div className={styles["grid-container"]}>
      <Modal closeModal={closeCard}>
        <ProjectContent project={currentProject} />
      </Modal>
      {projects.map((c, i) => (
        <ProjectCard
          key={i}
          isExpanded={expanded === i}
          project={projects[i]}
          expandCard={() => expandCard(i)}
        />
      ))}
    </div>
  );
}
