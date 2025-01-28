import "./index.css";

import stages from "./scripts/stages";
import StageCard from "./components/StageCard";
import StagesSection from "./components/StagesSection";
import { stagesContainer, participantsContainer } from "./scripts/constants";
import ParticipantCard from "./components/ParticipantCard";
import participants from "./scripts/participants";
import ParticipantsSection from "./components/ParticipantsSection";

//Create Stage//
function createStageCard(item) {
  const stage = new StageCard(
    item,
    ".stageCard-template",
  );
  return stage.createStageCard();
}

//Create Participant//
function createParticipant(item) {
  const participant = new ParticipantCard(
    item,
    ".participantCard-template",
  );
  return participant.createParticipantCard();
}

//Create Cards From Array//
const stagesSection = new StagesSection(
  {
    renderer: createStageCard,
  },
  stagesContainer
);

//Create Cards From Array//
const participantsSection = new ParticipantsSection(
  {
    renderer: createParticipant,
  },
  participantsContainer
);


stagesSection.renderItems(stages);
participantsSection.renderItems(participants);


//Slider//
const slider = document.querySelector('.slider');
const sliderButtonLeft = document.querySelector('.slider__button_left');
const sliderButtonRight = document.querySelector('.slider__button_right');
const slides = Array.from(slider.querySelectorAll('.participantCard'));
const slideCount = slides.length;
let slideIndex = 0;

console.log(slides)
