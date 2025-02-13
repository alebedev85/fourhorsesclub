import "./index.css";

import stages from "./scripts/stages";
import StageCard from "./components/StageCard";
import Section from "./components/Section";
import { stagesContainer, participantsContainer } from "./scripts/constants";
import ParticipantCard from "./components/ParticipantCard";
import participants from "./scripts/participants";
import setCarousel from "./scripts/setCarousel";
import setStagesCarousel from "./scripts/setStagesCarousel";
import throttle from "./scripts/throttle";

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
setStagesCarousel();

window.addEventListener(
  "resize",
  throttle(() => {
    setCarousel(participants);
    setStagesCarousel();
  }, 1000)
);
