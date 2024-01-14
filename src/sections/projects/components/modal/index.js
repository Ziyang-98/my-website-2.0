import React from "react";
import styles from "./index.module.scss";

export default function Modal({ isModalOpen, children }) {
  return (
    <div id="modal-container" className={`${styles["modal-container"]}`}>
      <div className={styles["modal-background"]}>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>
  );
}
