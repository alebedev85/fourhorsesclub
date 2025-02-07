export default class Indicator {
  constructor(indicatorSelector, totalIndex) {
    this._container = document.querySelector(indicatorSelector);
    this._listItems = this._container.querySelectorAll("li");
    this._currentIndex = 0;
    this._totalIndex = totalIndex;
  }

  _updateIndicator = () => {
    this._listItems.forEach((item, index) => {
      if (index === this._currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  increaseIndex = () => {
    if (this._currentIndex < this._totalIndex) {
      this._currentIndex += 1;
      this._updateIndicator();
    }
  };

  decreaseIndex = () => {
    if (this._currentIndex > 0) {
      this._currentIndex -= 1;
      this._updateIndicator();
    }
  };
}
