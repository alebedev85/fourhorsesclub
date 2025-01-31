export default class StageCard {
  constructor({ id, text }, templateSelector) {
    this._id = id;
    this._text = text;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardId = this._element.querySelector(".stageCard__id");
    this._cardText = this._element.querySelector(".stageCard__text");
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".stageCard")
      .cloneNode(true);

    return card;
  }

  createStageCard() {
    this._cardId.textContent = this._id;
    this._cardText.textContent = this._text;
    this._element.style.gridArea = 'area-' + this._id

    return this._element;
  }
}
