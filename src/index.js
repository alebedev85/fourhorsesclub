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
  const stage = new StageCard(item, ".stageCard-template");
  return stage.createStageCard();
}

//Create Participant//
function createParticipant(item) {
  const participant = new ParticipantCard(item, ".participantCard-template");
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
let width = 320 + 94; // ширина картинки
let count = 3; // видимое количество изображений

const slider = document.querySelector(".participantsSection__container");
const sliderButtonLeft = document.querySelector(".slider__button_left");
const sliderButtonRight = document.querySelector(".slider__button_right");
const slides = slider.querySelectorAll("li");
const slideCount = slides.length;

let position = 0;

sliderButtonRight.onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (slideCount - count));
  slider.style.marginLeft = position + "px";
};

sliderButtonLeft.onclick = function () {
  // сдвиг вправо
  position += width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (slideCount - count));
  slider.style.marginLeft = position + "px";
};
