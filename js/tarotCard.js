import showCard from "./preguntaData.js";

export default class TarotCard {
    constructor(name, image, response = null, definition = null) {
        this.name = name;
        this.image = image;
        this.response = response;
        this.definition = definition;
        this.cardInfo();
    }
    cardInfo(){
        this.section = document.getElementById('respuesta');

        const card = document.createElement('article');
        card.setAttribute('id', 'carta-final');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('id', 'imagen-carta');
        cardImage.src = this.image;

        const cardName = document.createElement('h3');
        cardName.setAttribute('id', 'titulo-carta');
        cardName.innerText = this.name;

        const cardResponse = document.createElement('p');
        cardResponse.setAttribute('id', 'respuesta-carta');
        cardResponse.innerText = this.response;

        const cardDefinition = document.createElement('p');
        cardDefinition.setAttribute('id', 'definicion-carta');
        cardDefinition.innerText = this.definition;

        this.section.append(card);
        card.append(cardName, cardImage, cardResponse, cardDefinition);
        }
}