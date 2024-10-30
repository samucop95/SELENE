import {showCard, showCards} from "./index.js";

export default function ShowMazos(theme, type) {

    const container = document.getElementById('mazos');
    container.innerHTML = '';
    const pregunta = document.createElement('h3');
    pregunta.classList.add('select-card');
    pregunta.innerText = 'Elije un mazo';
    
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'imageContainer');
    
    const image1 = document.createElement('img');
    image1.classList.add('reverse-card', 'image1');
    image1.src = 'resources/images/reverso-carta.png';
    image1.addEventListener('click', () => {
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })
    
    const image2 = document.createElement('img');
    image2.classList.add('reverse-card', 'image2');
    image2.src = 'resources/images/reverso-carta.png';
    image2.addEventListener('click', () => {
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })
    
    const image3 = document.createElement('img');
    image3.classList.add('reverse-card', 'image3');
    image3.src = 'resources/images/reverso-carta.png';
    image3.addEventListener('click', () => {
        if (type === 1) {
            const answer = showCard(theme);
        } else {
            const answer = showCards(theme);
        }
    })
    
    container.append(pregunta, imageContainer);
    imageContainer.append(image1, image2, image3);
}
