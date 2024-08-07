import React, { useState } from "react";
import styles from "./index.module.scss";

function CarouselItem({ children, height, width, className }) {
  return (
    <div
      className={`${styles["carousel-item"]} ${className}`}
      style={{ height: height, width: width }}
    >
      {children}
    </div>
  );
}

function CarouselIndicator({ index, updateIndex, isActive }) {
  return (
    <div
      className={
        isActive
          ? styles["carousel-indicator-active"]
          : styles["carousel-indicator"]
      }
      onClick={() => {
        updateIndex(index);
      }}
    />
  );
}

// Credits: https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU0Mzg5MDE3ODMxMDM4NTEzODciLCJlbWFpbCI6Inlhbmc3MzMyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDE1MDM4MDksIm5hbWUiOiJaaXlhbmcgTGltIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lSMUFLdHUxN05mZjNvSHhBZkE2RkFJMmxFcE5kRHBVVGIxVjk5blhFWmp3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlppeWFuZyIsImZhbWlseV9uYW1lIjoiTGltIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDE1MDQxMDksImV4cCI6MTcwMTUwNzcwOSwianRpIjoiZWNiN2MwNmUyYWYyYWYyODJmOGE1NzU0N2FlYzc1OTJlNzQ5NTE5MyJ9.GSre9FoV_W2YtuJNMpAUCfQGTtzXQ4WgNRZpmZpi2WCFQmie5BHBTbXLig1IzL--mjY07faBGQdkaA-kBKzkdpibyHSCqhaHHpuWOzs9Kz5ldf2Dy6pYRC3upRVeotkX2X7AE1f2dvIESaAL_9RAs7acbuSwnCidzJavJl57ecOBcdpetn_ZA_RzmDVuPUomO0HHPsvpFzT_eZZ-dI4rKznbRn3ooqoeXyv3WyJRKtkZrSN5jA9uwCnlVdA1IziKkk8t7e-P58RYnDqhV8xpLUXLWmK10jUGSRDlF2W39ZuRefpARiiTuHOJcXLJ5il0zXFfC0FCnoA3Fm7q-dFWHQ
function Carousel({ children, width, height }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);
  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  const supportsFullScreen =
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled;

  const handleFullscreenButtonClick = () => {
    if (document.fullscreenElement === null) {
      const carouselDisplayElement =
        document.getElementById("carousel-display");
      if (carouselDisplayElement.requestFullscreen) {
        carouselDisplayElement.requestFullscreen();
      } else if (carouselDisplayElement.mozRequestFullScreen) {
        // Firefox
        carouselDisplayElement.mozRequestFullScreen();
      } else if (carouselDisplayElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        carouselDisplayElement.webkitRequestFullscreen();
      } else if (carouselDisplayElement.msRequestFullscreen) {
        // IE/Edge
        carouselDisplayElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div
      className={styles.carousel}
      id={"carousel-display"}
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      <div className={styles["carousel-indicators"]}>
        {React.Children.map(children, (child, index) => {
          return (
            <CarouselIndicator
              index={index}
              updateIndex={updateIndex}
              isActive={index === activeIndex}
            />
          );
        })}
      </div>
      <div
        className={styles.inner}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          height: height,
          width: width,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { height: "100%", width: "100%" });
        })}
      </div>
      {supportsFullScreen && (
        <button
          className={styles["fullscreen-button"]}
          onClick={handleFullscreenButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-maximize"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      )}
      <div
        className={styles["carousel-left-btn-holder"]}
        onClick={() => updateIndex(activeIndex - 1)}
      >
        <div className={styles["carousel-btn-holder"]}>
          <svg
            className={`${styles["carousel-btn"]}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
      </div>
      <div
        className={styles["carousel-right-btn-holder"]}
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <div className={styles["carousel-btn-holder"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles["carousel-btn"]}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export { Carousel, CarouselItem };
