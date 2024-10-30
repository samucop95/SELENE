import Form from "./form.js";
import showCard from "./preguntaData.js";
import TarotCard from "./tarotCard.js";

function showForm() {
    const shortButton = document.getElementById('short-button');
    shortButton.addEventListener('click', () => {
        const form = new Form();
        return form;
    })
}



showForm();
//showCard('amor');