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

export function getLastUpdated(date) {
  const updatedDate = new Date(date);
  const now = new Date();
  const diff = now.getTime() - updatedDate.getTime();

  if (diff < 0) {
    return "Date is ahead of current time";
  }

  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  } else if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000); // Convert to hours
    return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  } else {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return updatedDate.toLocaleDateString("en-UK", options);
  }
}
