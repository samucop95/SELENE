export default class TarotCard {
    constructor(name, image, response = null, definition = null) {
        this.name = name;
        this.image = image;
        this.response = response;
        this.definition = definition;
    }
    cardInfo() {
        this.section = document.getElementById('respuesta');
        this.section.classList.remove('hidden-respuesta');
        this.section.classList.add('respuesta-sencilla');

        const card = document.createElement('article');
        card.classList.add('carta-final-unica');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('id', 'imagen-carta');
        cardImage.src = this.image;
        cardImage.classList.add('imagen-carta-unica');

        const cardName = document.createElement('h2');
        cardName.setAttribute('id', 'titulo-carta');
        cardName.innerText = this.name;
        cardName.classList.add('titulo-carta-unica');

        const cardResponse = document.createElement('p');
        cardResponse.setAttribute('id', 'texto-carta');
        cardResponse.innerText = this.response;
        cardResponse.classList.add('texto-carta');

        this.section.append(card);
        card.append(cardName, cardImage, cardResponse);
    }
    cardsInfo() {
        this.section = document.getElementById('respuesta');
        this.section.classList.remove('hidden-respuesta');
        this.section.classList.add('respuesta-completa');

        this.cards = this.section.querySelector('.cards-container');
        if (!this.cards) {
            this.cards = document.createElement('div');
            this.cards.classList.add('cards-container');
            this.section.appendChild(this.cards);
        }

        const card = document.createElement('article');
        card.classList.add('carta-final');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('id', 'imagen-carta');
        cardImage.src = this.image;
        cardImage.classList.add('imagen-carta');

        const cardName = document.createElement('h2');
        cardName.setAttribute('id', 'titulo-carta');
        cardName.innerText = this.name;
        cardName.classList.add('titulo-carta');

        const existingDefinition = this.cards.querySelector('#definicion-carta');
        if (!existingDefinition) {
            const cardDefinition = document.createElement('p');
            cardDefinition.setAttribute('id', 'definicion-carta');
            cardDefinition.innerText = this.definition;
            cardDefinition.classList.add('definicion-carta');
            this.cards.append(cardDefinition);
        }

        card.append(cardName, cardImage);
        this.cards.append(card);

    }
}