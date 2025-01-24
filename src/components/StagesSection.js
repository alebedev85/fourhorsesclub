export default class StagesSection {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  ///Render all elements///
  renderItems(items) {
    console.log(this._renderer)
    items.forEach((item) => this._container.append(this._renderer(item)))
  }

}
