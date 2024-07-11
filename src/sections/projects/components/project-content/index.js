import { Carousel, CarouselItem } from "../carousel";
import styles from "./index.module.scss";
import ThemedLink from "components/themed-link";

const sampleDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate velit ante, at consectetur metus posuere vitae. Aliquam accumsan, ipsum ut accumsan varius, nulla sem placerat metus, non dignissim ipsum ante id mi. Pellentesque arcu ipsum, fringilla id vestibulum non, auctor sit amet mauris. Nunc finibus efficitur nisi. Cras faucibus ex non ex finibus, vel fermentum tellus iaculis. Phasellus ac luctus diam. Vestibulum vel sapien eget orci vulputate laoreet quis ac libero. Phasellus ut ipsum est. Duis sit amet vulputate justo.";

export default function ProjectContent({ currentExpandedContent }) {
  return (
    <div className={styles["project-content-holder"]}>
      <div className={styles["gallery-holder"]}>
        <Carousel height="100%">
          <CarouselItem className={styles["project-carousel-item"]}>
            <img
              className={styles["project-card-img"]}
              alt="sample"
              width={"100%"}
              height={"65%"}
              src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CarouselItem>
          <CarouselItem className={styles["project-carousel-item"]}>
            <img
              className={styles["project-card-img"]}
              alt="sample"
              width={"100%"}
              height={"65%"}
              src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </CarouselItem>
          {/* <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem> */}
        </Carousel>
      </div>
      <div className={styles["details-holder"]}>
        <h1>Sample Title</h1>
        <div>{sampleDescription}</div>
        <div>{sampleDescription}</div>
        <div>{sampleDescription}</div>

        <div className={styles["links-holder"]}>
          <ThemedLink
            href="https://www.google.com"
            openNewTab={true}
            iconSize={16}
          >
            <h4>Repository</h4>
          </ThemedLink>
          <ThemedLink href="https://www.google.com" iconSize={16}>
            <h4>Project Info</h4>
          </ThemedLink>
        </div>
      </div>
    </div>
  );
}
