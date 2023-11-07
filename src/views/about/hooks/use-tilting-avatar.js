import { useEffect } from "react";

export function useTiltingAvatar() {
  useEffect(() => {
    const avatar = document.getElementById("avatar");
    const avatarHolder = document.getElementById("avatarHolder");

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
  }, []);
}
