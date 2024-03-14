import styles from "./index.module.scss";

export default function ExperienceLayout({ experience }) {
    const {
        jobTitle,
        location,
        company,
        duration,
        description,
    } = experience
    return (
        <div className={styles["experience-layout"]}>
            <div className={styles["experience-header"]}>
                <p className={styles["job-title"]}>{jobTitle}</p>
                <p className={styles["company-location"]}>{`${company}, ${location}`}</p>
            </div>
            <div className={styles["experience-sub-header"]}>
                <p className={styles["duration"]}>{duration}</p>
            </div>
            <div className={styles["experience-body"]}>
                <p className={styles["description"]}>{description}</p>
            </div>
        </div>
    );
}