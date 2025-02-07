import "./index.css";

import stages from "./scripts/stages";
import StageCard from "./components/StageCard";
import Section from "./components/Section";
import { stagesContainer, participantsContainer } from "./scripts/constants";
import ParticipantCard from "./components/ParticipantCard";
import participants from "./scripts/participants";
import setCarousel from "./scripts/setCarousel";
import StagesCarousel from "./components/StagesCarousel";

//Create Stage//
function createStageCard(item) {
  const stage = new StageCard(item, ".stageCard-template");
  return stage.createStageCard();
}

//Create Participant//
function createParticipantCard(item) {
  const participant = new ParticipantCard(item, ".participantCard-template");
  return participant.createParticipantCard();
}

//Create StageCard From Array//
const stagesSection = new Section(
  {
    renderer: createStageCard,
  },
  stagesContainer
);

//Create ParticipantCards From Array//
const participantsSection = new Section(
  {
    renderer: createParticipantCard,
  },
  participantsContainer
);

stagesSection.renderItems(stages);
participantsSection.renderItems(participants);

//Carousel//
setCarousel(participants);

window.addEventListener("resize", setCarousel);

//StagesCarousel//
const carouselLeftButton = document.querySelector(".stagesSlider__button_left");
const carouselRightButton = document.querySelector(
  ".stagesSlider__button_right"
);

const stagesCarousel = new StagesCarousel(
  ".stagesSection__container",
  carouselLeftButton,
  carouselRightButton
);
carouselLeftButton.addEventListener("click", stagesCarousel.backward);
carouselRightButton.addEventListener("click", stagesCarousel.forward);
