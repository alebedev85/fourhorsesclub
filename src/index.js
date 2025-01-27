import "./index.css";

import stages from "./scripts/stages";
import Stage from "./components/Stage";
import StagesSection from "./components/StagesSection";
import { stagesContainer } from "./scripts/constants";

//Create Cards From Array//
const stagesSection = new StagesSection(
  {
    renderer: createStage,
  },
  stagesContainer
);

//Create Stage//
function createStage(item) {
  const card = new Stage(
    item,
    ".stage-template",
  );
  return card.createStage();
}

stagesSection.renderItems(stages);
