import styles from "./index.module.scss";

export default function ProjectContent({ closeCard, currentExpandedContent }) {
  return (
    <div>
      <button className={styles["close-button"]} onClick={closeCard}>
        <p>Close</p>
      </button>
      <p>{currentExpandedContent}</p>
    </div>
  );
}
