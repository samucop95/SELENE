import Form from "./form.js";
import TarotCard from "./tarotCard.js";
import { getRandomCard } from "./api.js";
import { positiveCards, yesResponse, noResponse } from "./data.js";

function showForm() {
    const shortButton = document.getElementById('short-button');
    const longButton = document.getElementById('long-button');
    shortButton.addEventListener('click', () => {
        const form = new Form(1);
        return form;
    })
    longButton.addEventListener('click', () => {
        const form = new Form(2);
        return form;
    })
}

function getrandomQuote(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export default async function showCard(theme) {
    const container = document.getElementById('mazos');
    container.innerHTML = '';

    const selectedCard = await getRandomCard();
    const result = {
        selectedCard,
        response: getrandomQuote(noResponse)
    };
    if (positiveCards[theme].includes(selectedCard.name)) {
        result.response = getrandomQuote(yesResponse);
    }
    const newImage = './resources/images/prueba-carta.png'
    const carta = new TarotCard(result.selectedCard.name, newImage, result.response, result.selectedCard.definition);
    return carta;
}



showForm();