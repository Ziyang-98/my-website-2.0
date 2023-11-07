import { useEffect } from "react";
import styles from "../index.module.scss";

export default function useAnimationAvatar(hasTilt = true, hasSpin = false) {
  useEffect(() => {
    const avatar = document.getElementById("avatar");
    const avatarHolder = document.getElementById("avatarHolder");
    if (hasTilt) {
      avatarHolder.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const rect = avatarHolder.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angleX = ((clientY - centerY) / (rect.height / 2)) * 30;
        const angleY = ((centerX - clientX) / (rect.width / 2)) * 30;

        avatar.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      });

      avatarHolder.addEventListener("mouseout", () => {
        avatar.style.transform = "rotateX(0) rotateY(0) scale(1)";
      });
    }
    if (hasSpin) {
      avatarHolder.addEventListener("click", () => {
        avatar.classList.add(styles.spin);
        setTimeout(() => {
          avatar.classList.remove(styles.spin);
          avatar.classList.add(styles.avatar);
        }, 1000);
      });
    }
  }, [hasTilt, hasSpin]);
}
