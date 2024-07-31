import styles from "./index.module.scss";

export default function ExperienceLayout({ experience }) {
  const { jobTitle, company, duration, description } = experience;
  return (
    <div className={styles["experience-layout"]}>
      <div className={styles["experience-header"]}>
        <span className={styles["job-title"]}>{jobTitle}</span>
        <span className={styles["company"]}>{company}</span>
      </div>
      <div className={styles["experience-sub-header"]}>
        <span className={styles["duration"]}>{duration}</span>
      </div>
      <div className={styles["experience-body"]}>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
}
