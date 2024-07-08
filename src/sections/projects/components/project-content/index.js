import { Carousel, CarouselItem } from "../carousel";
import styles from "./index.module.scss";

export default function ProjectContent({ currentExpandedContent }) {
  return (
    <div className={styles["project-content-holder"]}>
      <div className={styles["gallery-holder"]}>
        <Carousel height="100%">
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </div>
      <div className={styles["details-holder"]}>
        <h1>Sample Title</h1>
        <div>{currentExpandedContent}</div>
      </div>
    </div>
  );
}
