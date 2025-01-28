export default class ParticipantCard {
  constructor({ name, status }, templateSelector) {
    this._name = name;
    this._status = status;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardId = this._element.querySelector(".participantCard__name");
    this._cardText = this._element.querySelector(".participantCard__disc");
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".participantCard")
      .cloneNode(true);

    return card;
  }

  createParticipantCard() {
    this._cardId.textContent = this._id;
    this._cardText.textContent = this._text;

    return this._element;
  }
}
