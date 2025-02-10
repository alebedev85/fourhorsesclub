export default class StagesCarousel {
  constructor(
    carouselSelector,
    indicatorSelector,
    carouselLeftButton,
    carouselRightButton
  ) {
    this._carousel = document.querySelector(carouselSelector);
    this._indicator = document.querySelector(indicatorSelector);
    this._indicatorItems = this._indicator.querySelectorAll("li");
    this._slideWidth = this._carousel.offsetWidth + 16;
    this._carouselLeftButton = carouselLeftButton;
    this._carouselRightButton = carouselRightButton;
    this._slidesTotalCount = 4;
    this._slidesCurrentCount = 0;
  }

  _updateIndicator = () => {
    this._indicatorItems.forEach((item, index) => {
      if (index === this._slidesCurrentCount) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  forward = () => {
    if (this._slidesCurrentCount < this._slidesTotalCount) {
      this._carouselRightButton.disable = false;
      this._slidesCurrentCount += 1;
      this._carousel.style.transform = `translateX(-${
        this._slideWidth * this._slidesCurrentCount
      }px)`;
      this._updateIndicator();
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
      this._updateIndicator();
    } else {
      this._carouselRightButton.disable = true;
    }
  };
}
