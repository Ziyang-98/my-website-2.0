import styles from "./index.module.scss";

export default function ProjectContent({ currentExpandedContent }) {
  return (
    <div className={styles["project-content-holder"]}>
      <p>{currentExpandedContent}</p>
    </div>
  );
}
