import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

function CarouselItem({ children, height, width }) {
  return (
    <div
      className={styles["carousel-item"]}
      style={{ height: height, width: width }}
    >
      {children}
    </div>
  );
}

function CarouselIndicator({ isActive }) {
  return (
    <div
      className={
        isActive
          ? styles["carousel-indicator-active"]
          : styles["carousel-indicator"]
      }
    />
  );
}

// Credits: https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU0Mzg5MDE3ODMxMDM4NTEzODciLCJlbWFpbCI6Inlhbmc3MzMyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDE1MDM4MDksIm5hbWUiOiJaaXlhbmcgTGltIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lSMUFLdHUxN05mZjNvSHhBZkE2RkFJMmxFcE5kRHBVVGIxVjk5blhFWmp3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlppeWFuZyIsImZhbWlseV9uYW1lIjoiTGltIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDE1MDQxMDksImV4cCI6MTcwMTUwNzcwOSwianRpIjoiZWNiN2MwNmUyYWYyYWYyODJmOGE1NzU0N2FlYzc1OTJlNzQ5NTE5MyJ9.GSre9FoV_W2YtuJNMpAUCfQGTtzXQ4WgNRZpmZpi2WCFQmie5BHBTbXLig1IzL--mjY07faBGQdkaA-kBKzkdpibyHSCqhaHHpuWOzs9Kz5ldf2Dy6pYRC3upRVeotkX2X7AE1f2dvIESaAL_9RAs7acbuSwnCidzJavJl57ecOBcdpetn_ZA_RzmDVuPUomO0HHPsvpFzT_eZZ-dI4rKznbRn3ooqoeXyv3WyJRKtkZrSN5jA9uwCnlVdA1IziKkk8t7e-P58RYnDqhV8xpLUXLWmK10jUGSRDlF2W39ZuRefpARiiTuHOJcXLJ5il0zXFfC0FCnoA3Fm7q-dFWHQ
function Carousel({ children, width, height }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
      <div className={styles.indicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <CarouselIndicator isActive={index === activeIndex} />
            // <button
            //   className={`${index === activeIndex ? styles.active : ""}`}
            //   onClick={() => {
            //     updateIndex(index);
            //   }}
            // >
            //   {index + 1}
            // </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export { Carousel, CarouselItem };
