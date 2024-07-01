import React from "react";
import styles from "./index.module.scss";
import ThemedButton from "components/themed-button";

export default function ProjectCard({
  className,
  isExpanded,
  previewContent,
  expandCard,
}) {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-img-holder"]}>
        <img
          className={styles["project-card-img"]}
          alt="sample"
          src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className={styles["project-info-holder"]}>
        <h2 className={styles["project-card-title"]}>Card 1</h2>
        <p className={styles["project-card-description"]}>{previewContent}</p>
        {/* <button
          className={styles["project-card-button"]}
          onClick={() => {
            if (!isExpanded) {
              expandCard();
            }
          }}
        >
          Learn More
        </button> */}
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
