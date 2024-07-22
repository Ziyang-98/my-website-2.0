import Tooltip from "components/tooltip";
import { Carousel, CarouselItem } from "../carousel";
import styles from "./index.module.scss";
import ThemedLink from "components/themed-link";

export default function ProjectContent({ project }) {
  return (
    <div className={styles["project-content-holder"]}>
      <div className={styles["gallery-holder"]}>
        <Carousel height="100%">
          {project?.image.showcases.map((c, i) => (
            <CarouselItem key={i}>
              <img
                className={styles["project-card-img"]}
                alt={c.title}
                src={c.image}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <div className={styles["details-holder"]}>
        <div className={styles["details-title"]}>
          <h1>{project?.title}</h1>
        </div>

        <div className={styles["details-description"]}>
          {project?.description}
        </div>
        <h3 className={styles["details-section-header"]}>Tech Stack</h3>
        <div className={styles["tech-stack-holder"]}>
          {project?.techStack.map((icon) => (
            <Tooltip tooltipText={icon.name}>
              <img src={icon.img} alt={icon.name} className={styles["icon"]} />
            </Tooltip>
          ))}
        </div>
        <h3 className={styles["details-section-header"]}>Links</h3>
        <div className={styles["links-holder"]}>
          {project?.links.map(({ name, link }) => (
            <ThemedLink href={link} openNewTab={true} iconSize={16}>
              <h4 className={styles["link-text"]}>{name}</h4>
            </ThemedLink>
          ))}
        </div>
      </div>
    </div>
  );
}
