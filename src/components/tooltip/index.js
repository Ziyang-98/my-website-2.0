import styles from "./index.module.scss";

export default function Tooltip({ children, tooltipText }) {
  return (
    <div className={styles["tooltip"]}>
      {children}
      <span className={styles["tooltip-text"]}>{tooltipText}</span>
    </div>
  );
}
