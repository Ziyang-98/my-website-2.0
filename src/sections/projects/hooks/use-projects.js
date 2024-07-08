import { useState } from "react";
import modalStyles from "../components/modal/index.module.scss";
import { delay } from "commons/utils";

const previewContent = [
  "content1",
  "content2",
  "content3",
  "content4",
  "content5",
  "content6",
  "content7",
  "content8",
  "content9",
];

const expandedContent = [
  "expandedContent1",
  "expandedContent2",
  "expandedContent3",
  "expandedContent4",
  "expandedContent5",
  "expandedContent6",
  "expandedContent7",
  "expandedContent8",
  "expandedContent9",
];

const NO_EXPANDED = -1;
const NO_EXPANDED_CARD = null;

export default function useProjects() {
  const [expanded, setExpanded] = useState(NO_EXPANDED);

  const [currentExpandedContent, setCurrentExpandedContent] =
    useState(NO_EXPANDED_CARD);

  const expandCard = (index) => {
    setExpanded(index);
    setCurrentExpandedContent(expandedContent[index]);
    document.body.classList.add("modal-active"); // Add class to the body when modal is open
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove(modalStyles.out);
    modalContainer.classList.add(modalStyles.active);
  };

  const closeCard = async () => {
    document.body.classList.remove("modal-active"); // Remove class when modal is closed
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.add(modalStyles.out);
    await delay(1);
    // modalContainer.classList.remove(modalStyles.active);
    setExpanded(NO_EXPANDED);
    setCurrentExpandedContent(NO_EXPANDED_CARD);
  };

  return {
    isModalActive: expanded !== NO_EXPANDED,
    expanded,
    expandCard,
    closeCard,
    previewContent,
    currentExpandedContent,
  };
}
