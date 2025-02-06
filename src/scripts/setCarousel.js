import Carousel from "../components/Carousel";

const sliderButtonLeft = document.querySelector(".slider__button_left");
const sliderButtonRight = document.querySelector(".slider__button_right");
const slideWidth = 320 + 94;
let slideCount;

function carouselLoop(c) {
  setTimeout(() => {
    c.forward();
    carouselLoop(c);
  }, 4000);
}

export default function setCarousel(participants) {
  if (window.screen.width >= 1295) {
    slideCount = 3;
  } else if (window.screen.width >= 955) {
    slideCount = 2;
  } else {
    slideCount = 1;
  }
  const carousel = new Carousel(
    slideWidth,
    slideCount,
    ".participantsSection__container",
    participants.length
  );

  carousel.setCurrentCount(slideCount);
  carousel.setTotalCount();
  sliderButtonRight.addEventListener("click", carousel.forward);
  sliderButtonLeft.addEventListener("click", carousel.backward);
  carouselLoop(carousel);
}
