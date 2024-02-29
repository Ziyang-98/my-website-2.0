import React from "react";
import styles from "./index.module.scss";
import { Carousel, CarouselItem } from "./components/carousel";

export default function Portfolio({ portfolioSectionRef }) {
  /*
  New Design Idea: 
  Create a simple UI to show case porfolio that animates in a form of a wheel carousel (shifts from up to down).
  There will be navigation buttons on the side with navigation indicators to show how many items.
  There can be another header to show total years of experience.
  */
  return (
    // https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU0Mzg5MDE3ODMxMDM4NTEzODciLCJlbWFpbCI6Inlhbmc3MzMyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDE1MDM4MDksIm5hbWUiOiJaaXlhbmcgTGltIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lSMUFLdHUxN05mZjNvSHhBZkE2RkFJMmxFcE5kRHBVVGIxVjk5blhFWmp3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlppeWFuZyIsImZhbWlseV9uYW1lIjoiTGltIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDE1MDQxMDksImV4cCI6MTcwMTUwNzcwOSwianRpIjoiZWNiN2MwNmUyYWYyYWYyODJmOGE1NzU0N2FlYzc1OTJlNzQ5NTE5MyJ9.GSre9FoV_W2YtuJNMpAUCfQGTtzXQ4WgNRZpmZpi2WCFQmie5BHBTbXLig1IzL--mjY07faBGQdkaA-kBKzkdpibyHSCqhaHHpuWOzs9Kz5ldf2Dy6pYRC3upRVeotkX2X7AE1f2dvIESaAL_9RAs7acbuSwnCidzJavJl57ecOBcdpetn_ZA_RzmDVuPUomO0HHPsvpFzT_eZZ-dI4rKznbRn3ooqoeXyv3WyJRKtkZrSN5jA9uwCnlVdA1IziKkk8t7e-P58RYnDqhV8xpLUXLWmK10jUGSRDlF2W39ZuRefpARiiTuHOJcXLJ5il0zXFfC0FCnoA3Fm7q-dFWHQ
    <div ref={portfolioSectionRef} className={styles.portfolio} id="portfolio">
      <div>Carousel to create story narrative for my career</div>
      <Carousel height="60vh" width="60vw">
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
  );
}
