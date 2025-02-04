import "./index.css";

import stages from "./scripts/stages";
import StageCard from "./components/StageCard";
import Section from "./components/Section";
import { stagesContainer, participantsContainer } from "./scripts/constants";
import ParticipantCard from "./components/ParticipantCard";
import participants from "./scripts/participants";
import Carousel from "./components/Carousel";

//Create Stage//
function createStageCard(item) {
  const stage = new StageCard(item, ".stageCard-template");
  return stage.createStageCard();
}

//Create Participant//
function createParticipant(item) {
  const participant = new ParticipantCard(item, ".participantCard-template");
  return participant.createParticipantCard();
}

//Create Cards From Array//
const stagesSection = new Section(
  {
    renderer: createStageCard,
  },
  stagesContainer
);

//Create Cards From Array//
const participantsSection = new Section(
  {
    renderer: createParticipant,
  },
  participantsContainer
);

stagesSection.renderItems(stages);
participantsSection.renderItems(participants);

//Slider//
const slideWidth = 320 + 94;
const slideCount = 1;

function carouselLoop() {
  setTimeout(() => {
    carousel.forward();
    carouselLoop();
  }, 4000);
}

const carousel = new Carousel(
  slideWidth,
  slideCount,
  ".participantsSection__container",
  participants.length
);

carousel.setCurrentCount(slideCount);
carousel.setTotalCount();

const sliderButtonLeft = document.querySelector(".slider__button_left");
const sliderButtonRight = document.querySelector(".slider__button_right");

sliderButtonRight.addEventListener("click", carousel.forward);
sliderButtonLeft.addEventListener("click", carousel.backward);

// carouselLoop();
