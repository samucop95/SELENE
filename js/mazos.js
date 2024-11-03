import { showCard, showCards } from "./index.js";

export default function ShowMazos(theme, type) {

    const container = document.getElementById('mazos');
    container.classList.remove('hidden-mazos');
    container.classList.add('mazos');
    const pregunta = document.createElement('h2');
    pregunta.classList.add('select-card');
    pregunta.innerText = 'Elije un mazo';

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'imageContainer');

    const image1 = document.createElement('img');
    image1.classList.add('reverse-card');
    image1.setAttribute('id', 'reverse-card-1');
    image1.src = 'resources/images/reverso-carta.jpeg';
    image1.addEventListener('click', () => {
        container.classList.add('hidden-mazos');
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })

    const image2 = document.createElement('img');
    image2.classList.add('reverse-card');
    image2.setAttribute('id', 'reverse-card-2');
    image2.src = 'resources/images/reverso-carta.jpeg';
    image2.addEventListener('click', () => {
        container.classList.add('hidden-mazos');
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })

    const image3 = document.createElement('img');
    image3.classList.add('reverse-card');
    image3.setAttribute('id', 'reverse-card-3');
    image3.src = 'resources/images/reverso-carta.jpeg';
    image3.addEventListener('click', () => {
        container.classList.add('hidden-mazos');
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })

    container.append(pregunta, imageContainer);
    imageContainer.append(image1, image2, image3);
}