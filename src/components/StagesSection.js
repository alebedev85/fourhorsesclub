export default class StagesSection {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  ///Render all elements///
  renderItems(items) {
    items.forEach((item) => this._container.append(this._renderer(item)))
  }

}
