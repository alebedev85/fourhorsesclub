import "./index.css";

import stages from "./scripts/stages";
import Stage from "./components/Stage";
import StagesSection from "./components/StagesSection";
import { stagesContainer, participantsContainer } from "./scripts/constants";
import ParticipantCard from "./components/ParticipantCard";
import participants from "./scripts/participants";
import ParticipantsSection from "./components/ParticipantsSection";

//Create Stage//
function createStage(item) {
  const stage = new Stage(
    item,
    ".stage-template",
  );
  return stage.createStage();
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
    renderer: createStage,
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
