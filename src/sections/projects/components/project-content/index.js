import styles from "./index.module.scss";

export default function ProjectContent({ currentExpandedContent }) {
  return (
    <div className={styles["project-content-holder"]}>
      <div className={styles["gallery-holder"]}>gallery area</div>
      <div className={styles["details-holder"]}>{currentExpandedContent}</div>
    </div>
  );
}
