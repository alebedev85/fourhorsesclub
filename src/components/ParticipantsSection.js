export default class ParticipantsSection {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  ///Render all elements///
  renderItems(items) {
    items.forEach((item) => this._container.append(this._renderer(item)))
  }

}
