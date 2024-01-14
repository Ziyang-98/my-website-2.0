export function smoothScrollTo(target, duration) {
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const progress = timeElapsed / duration;

    window.scrollTo(0, easeInOutCubic(progress) * distance + startPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutCubic(t) {
    if ((t *= 2) < 1) return 0.5 * t * t * t;
    return 0.5 * ((t -= 2) * t * t + 2);
  }

  requestAnimationFrame(scrollAnimation);
}

export async function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
