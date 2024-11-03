import Form from "./form.js";
import TarotCard from "./tarotCard.js";
import { getRandomCard } from "./api.js";
import { positiveCards, yesResponse, noResponse } from "./data.js";

function showForm() {
    const firstShortButton = document.getElementById('first-short-button');
    const firstLongButton = document.getElementById('first-long-button');
    const secondShortButton = document.getElementById('second-short-button');
    const secondLongButton = document.getElementById('second-long-button');
    const intro = document.getElementById('introduction');
    const page = document.getElementById('page');
    const mazos = document.getElementById('mazos');
    const respuesta = document.getElementById('respuesta');
    firstShortButton.addEventListener('click', () => {
        const form = new Form(1);
        intro.classList.add('hidden-intro');
        mazos.classList.add('hidden-mazos');
        respuesta.classList.add('hidden-respuesta');
        page.classList.remove('hidden-page');
        return form;
    })
    secondShortButton.addEventListener('click', () => {
        const form = new Form(1);
        mazos.classList.remove('mazos');
        mazos.classList.add('hidden-mazos');
        respuesta.classList.remove('respuesta-sencilla');
        respuesta.classList.remove('respuesta-completa');
        respuesta.classList.add('hidden-respuesta');
        return form;
    })
    firstLongButton.addEventListener('click', () => {
        const form = new Form(2);
        intro.classList.add('hidden-intro');
        mazos.classList.add('hidden-mazos');
        respuesta.classList.add('hidden-respuesta');
        page.classList.remove('hidden-page');
        return form;
    })
    secondLongButton.addEventListener('click', () => {
        const form = new Form(2);
        mazos.classList.remove('mazos');
        mazos.classList.add('hidden-mazos');
        respuesta.classList.remove('respuesta-sencilla');
        respuesta.classList.remove('respuesta-completa');
        respuesta.classList.add('hidden-respuesta');
        return form;
    })

}

function getRandomQuote(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function showCard(theme) {
    const container = document.getElementById('mazos');
    container.classList.remove('mazos');
    container.classList.add('hidden-mazos');
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
    const newImage = './resources/images/imagenes-cartas/' + result.selectedCard.name + '.jpeg';
    const carta = new TarotCard(result.selectedCard.name, newImage, result.response, result.selectedCard.definition);
    carta.cardInfo();
}

async function showCards(theme) {
    const container = document.getElementById('mazos');
    container.classList.remove('mazos');
    container.classList.add('hidden-mazos');
    container.innerHTML = '';
    let definition = false;

    const selectedCards = await getRandomCard(3);
    selectedCards.forEach(card => {
        const newImage = './resources/images/imagenes-cartas/' + card.name + '.jpeg';
        const description = definition ? null : card[theme];
        definition = true;
        const carta = new TarotCard(card.name, newImage, null, description)
        carta.cardsInfo();
    })
}


showForm();

export {
    showCard,
    showCards
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const textContainer = document.querySelector('.text-container');
    const mainContent = document.querySelector('.main-content');

    // Hacer que el texto aparezca
    setTimeout(() => {
        textContainer.style.opacity = 1; // Hace que el texto aparezca
    }, 1000); // Espera 1 segundo para mostrar el texto

    // Después de 5 segundos, desaparecer todo
    setTimeout(() => {
        overlay.style.opacity = 0; // Desaparece la superposición
        textContainer.style.opacity = 0; // Desaparece el texto
    }, 5000); // 5 segundos

    // Después de que la superposición desaparezca, muestra el contenido principal
    overlay.addEventListener('transitionend', () => {
        if (overlay.style.opacity === '0') {
            overlay.style.display = 'none'; // Oculta la superposición
            mainContent.style.display = 'block'; // Muestra el contenido principal
            mainContent.style.opacity = 1; // Cambia la opacidad del contenido principal a 1
        }
    });
});
