import React from "react";
import styles from "./index.module.scss";

export default function ProjectCard({ className, content }) {
  return (
    <div className={`${className} ${styles["project-card"]}`}>Card Content</div>
  );
}
