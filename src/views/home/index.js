import React from "react";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.homeSection}>
      <text className={styles.name}>LIM ZI YANG</text>
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
}
