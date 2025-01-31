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

sliderButtonRight.onclick = function () {
  const slides = slider.querySelectorAll(".participantCard");
  const slideCount = slides.length;

  slider.classList.add("sliding-transition");

  slider.style.transform = `translateX(-${width * count}px)`;

  setTimeout(() => {
    Array.from(slides)
      .slice(0, count)
      .forEach((slide) => slider.appendChild(slide));

    slider.classList.remove("sliding-transition");
    slider.style.transform = "";
  }, 500);
};

sliderButtonLeft.onclick = function () {
  const slides = slider.querySelectorAll(".participantCard");
  const slideCount = slides.length;

  Array.from(slides)
    .slice(slideCount - count, slideCount)
    .reverse()
    .forEach((slide) => slider.insertBefore(slide, slider.firstChild));

  slider.style.transform = `translateX(-${width * count}px)`;

  setTimeout(() => {
    slider.style.transform = "";
    slider.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    slider.classList.remove("sliding-transition");
  }, 490);
};
