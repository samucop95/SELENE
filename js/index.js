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

function getRandomQuote(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function showCard(theme) {
    const container = document.getElementById('mazos');
    container.innerHTML = '';

    const selectedCards = await getRandomCard(1);
    const selectedCard = selectedCards[0];
    const result = {
        selectedCard,
        response: getRandomQuote(noResponse)
    };
    if (positiveCards[theme].includes(selectedCard.name)) {
        result.response = getRandomQuote(yesResponse);
    }
    const newImage = './resources/images/prueba-carta.png';
    const carta = new TarotCard(result.selectedCard.name, newImage, result.response, result.selectedCard.definition);
    return carta;
}

async function showCards(theme) {
    const container1 = document.getElementById('mazos');
    container1.innerHTML = '';
    let definition = false;

    const selectedCards = await getRandomCard(3);
    selectedCards.forEach(card => {
        const newImage = './resources/images/prueba-carta.png';
        const description = definition ? null : card[theme];
        definition = true;
        const carta = new TarotCard(card.name, newImage, null, description)
    })
}


showForm();

export {
    showCard,
    showCards
}