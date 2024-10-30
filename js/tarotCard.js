export default class TarotCard {
    constructor(name, image, response = null, definition = null) {
        this.name = name;
        this.image = image;
        this.response = response;
        this.definition = definition;
        this.cardInfo();
    }
    cardInfo() {
        this.section = document.getElementById('respuesta');
        this.section1 = document.getElementById('respuesta-texto');

        const card = document.createElement('article');
        card.setAttribute('id', 'carta-final');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('id', 'imagen-carta');
        cardImage.src = this.image;

        const cardName = document.createElement('h3');
        cardName.setAttribute('id', 'titulo-carta');
        cardName.innerText = this.name;

        const cardResponse = document.createElement('p');
        cardResponse.setAttribute('id', 'texto-carta');
        cardResponse.innerText = this.response;

        const cardDefinition = document.createElement('p');
        cardDefinition.setAttribute('id', 'definicion-carta');
        cardDefinition.innerText = this.definition;

        this.section.append(card);
        card.append(cardName, cardImage);
        this.section1.append(cardDefinition, cardResponse);
    }
}