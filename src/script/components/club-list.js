import './club-item.js';

class ClubList extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({mode: 'open'});
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  renderError(message) {
    this._shadowDOM.innerHTML = `
    <style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>`;

    this._shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render() {
    this._shadowDOM.innerHTML = "";
    this._clubs.forEach(club => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club
      this._shadowDOM.appendChild(clubItemElement);
    });
  }
}

customElements.define("club-list", ClubList);