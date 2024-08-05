import { useState } from "react";
import modalStyles from "../components/modal/index.module.scss";
import PeerPrep from "../project-items/peer-prep";
import JobTrack from "../project-items/job-track";
import CoralReefConservation from "../project-items/coral-reef-conservation";
import Coffeeberry from "../project-items/coffeeberry";
import CommonCents from "../project-items/common-cents";
import Bob from "../project-items/bob";
import Modplanner from "../project-items/mod-planner";
import Flowforge from "../project-items/flowforge";

const projects = [
  Flowforge,
  PeerPrep,
  JobTrack,
  CoralReefConservation,
  Coffeeberry,
  CommonCents,
  Bob,
  Modplanner,
];

const NO_EXPANDED = -1;
const NO_EXPANDED_CARD = null;

export default function useProjects() {
  const [expanded, setExpanded] = useState(NO_EXPANDED);

  const [currentProject, setCurrentProject] = useState(NO_EXPANDED_CARD);

  const expandCard = (index) => {
    setExpanded(index);
    setCurrentProject(projects[index]);
    document.body.classList.add("modal-active"); // Add class to the body when modal is open
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove(modalStyles.out);
    modalContainer.classList.add(modalStyles.active);
  };

  const closeCard = () => {
    document.body.classList.remove("modal-active"); // Remove class when modal is closed
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.add(modalStyles.out);
    setExpanded(NO_EXPANDED);
    setCurrentProject(NO_EXPANDED_CARD);
  };

  return {
    isModalActive: expanded !== NO_EXPANDED,
    expanded,
    expandCard,
    closeCard,
    projects,
    currentProject,
  };
}
