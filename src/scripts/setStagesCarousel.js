import StagesCarousel from "../components/StagesCarousel";

export default function setStagesCarousel() {
  const carouselLeftButton = document.querySelector(
    ".stagesSlider__button_left"
  );
  const carouselRightButton = document.querySelector(
    ".stagesSlider__button_right"
  );
  const stagesCarousel = new StagesCarousel(
    ".stagesSection__container",
    ".stagesSlider__counter",
    carouselLeftButton,
    carouselRightButton
  );

  stagesCarousel.reset();
  carouselLeftButton.addEventListener("click", () => {
    stagesCarousel.backward();
  });
  carouselRightButton.addEventListener("click", () => {
    stagesCarousel.forward();
  });
}
