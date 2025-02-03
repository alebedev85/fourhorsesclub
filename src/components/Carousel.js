export default class Carousel {
  constructor(slideWidth, slideCount, carouselSelector, totalCount) {
    this._slideWidth = slideWidth;
    this._slideCount = slideCount;
    this._carousel = document.querySelector(carouselSelector);
    this._carouselButtons = document.querySelector(".slider__buttons");
    this._slidesTotalCount = totalCount;
    this._slidesCurrentCount = slideCount;
  }

  setCurrentCount = (currentCount) => {
    this._carouselButtons.querySelector(".counter__courant").textContent =
      currentCount;
  };

  setTotalCount = () => {
    this._carouselButtons.querySelector(".counter__all").textContent =
      this._slidesTotalCount;
  };

  forward = () => {
    const slides = this._carousel.querySelectorAll("li");

    this._carousel.classList.add("sliding-transition");

    this._carousel.style.transform = `translateX(-${
      this._slideWidth * this._slideCount
    }px)`;


    if (this._slidesCurrentCount >= this._slidesTotalCount) {
      this._slidesCurrentCount = this._slideCount;
    } else {
      this._slidesCurrentCount += this._slideCount;
    }

    this.setCurrentCount(this._slidesCurrentCount);

    setTimeout(() => {
      Array.from(slides)
        .slice(0, this._slideCount)
        .forEach((slide) => this._carousel.appendChild(slide));

      this._carousel.classList.remove("sliding-transition");
      this._carousel.style.transform = "";
    }, 1000);
  };

  backward = () => {
    const slides = this._carousel.querySelectorAll("li");
    const slidesCountTotal = slides.length;

    if (this._slidesCurrentCount <= this._slideCount) {
      this._slidesCurrentCount = this._slidesTotalCount;
    } else {
      this._slidesCurrentCount -= this._slideCount;
    }

    this.setCurrentCount(this._slidesCurrentCount);

    Array.from(slides)
      .slice(slidesCountTotal - this._slideCount, slidesCountTotal)
      .reverse()
      .forEach((slide) =>
        this._carousel.insertBefore(slide, this._carousel.firstChild)
      );

    this._carousel.style.transform = `translateX(-${
      this._slideWidth * this._slideCount
    }px)`;

    setTimeout(() => {
      this._carousel.style.transform = "";
      this._carousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
      this._carousel.classList.remove("sliding-transition");
    }, 990);
  };
}
