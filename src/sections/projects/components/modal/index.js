import React, { useEffect } from "react";
import styles from "./index.module.scss";

export default function Modal({
  closeModal,
  children,
  enableCloseButton = true,
}) {
  // For closing of modal on background click
  useEffect(() => {
    const parentDiv = document.getElementById("modal-background");
    parentDiv.addEventListener("click", function (event) {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    });
  }, [closeModal]);

  return (
    <div id="modal-container" className={`${styles["modal-container"]}`}>
      <div id="modal-background" className={styles["modal-background"]}>
        <div id="modal-content" className={styles.modal}>
          {children}
          {enableCloseButton && (
            <button className={styles["close-button"]} onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 1 0 1.414-1.414L13.414 12z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
