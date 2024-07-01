import React from "react";
import styles from "./index.module.scss";

export default function ThemedButton({
  onClick,
  size,
  text = "Click Me!",
  isRounded = true,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles[size]} ${
        isRounded ? styles.rounded : ""
      } ${className}`}
    >
      {text}
    </button>
  );
}
