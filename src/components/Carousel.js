export default class Carousel {
  constructor(slideWidth, slideCount, carouselSelector) {
    this._slideWidth = slideWidth;
    this._slideCount = slideCount;
    this._carousel = document.querySelector(carouselSelector);
    // this._carouselButtons = document.querySelector(".slider__buttons");
  }

  forward = () =>{
    const slides = this._carousel.querySelectorAll("li");

    this._carousel.classList.add("sliding-transition");

    this._carousel.style.transform = `translateX(-${this._slideWidth  * this._slideCount}px)`;

    setTimeout(() => {
      Array.from(slides)
        .slice(0, this._slideCount)
        .forEach((slide) => this._carousel.appendChild(slide));

      this._carousel.classList.remove("sliding-transition");
      this._carousel.style.transform = "";
    }, 500);
  }

  backward = () => {
    const slides = this._carousel.querySelectorAll("li");
    const slidesCountTotal = slides.length;

    Array.from(slides)
      .slice(slidesCountTotal - this._slideCount, slidesCountTotal)
      .reverse()
      .forEach((slide) =>
        this._carousel.insertBefore(slide, this._carousel.firstChild)
      );

    this._carousel.style.transform = `translateX(-${this._slideWidth  * this._slideCount}px)`;

    setTimeout(() => {
      this._carousel.style.transform = "";
      this._carousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
      this._carousel.classList.remove("sliding-transition");
    }, 490);
  }
}
