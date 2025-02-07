export default class StagesCarousel {
  constructor(
    carouselSelector,
    carouselLeftButton,
    carouselRightButton
  ) {
    this._carousel = document.querySelector(carouselSelector);
    this._slideWidth = this._carousel.offsetWidth + 16;
    this._carouselLeftButton = carouselLeftButton;
    this._carouselRightButton = carouselRightButton;
    this._slidesTotalCount = 4;
    this._slidesCurrentCount = 0;
  }

  forward = () => {
    if (this._slidesCurrentCount < this._slidesTotalCount) {
      this._carouselRightButton.disable = false;
      this._slidesCurrentCount += 1;
      this._carousel.style.transform = `translateX(-${
        this._slideWidth * this._slidesCurrentCount
      }px)`;
    } else {
      this._carouselRightButton.disable = true;
    }
  };

  backward = () => {
    if (this._slidesCurrentCount > 0) {
      this._carouselRightButton.disable = false;
      this._slidesCurrentCount -= 1;
      this._carousel.style.transform = `translateX(-${
        this._slideWidth * this._slidesCurrentCount
      }px)`;
    } else {
      this._carouselRightButton.disable = true;
    }
  };
}
