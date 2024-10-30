//FUNCION PARA OBTENER LA URL DE BUSQUEDA DE LA API
const BASE_URL = 'https://tarot-api-es.vercel.app/api/v1/';
async function fetchData(route, searchParams = {}) {
    try {
        const url = new URL(BASE_URL + route);
        for (const key of Object.keys(searchParams)) {
            url.searchParams.append(key, searchParams[key]);
        }
        const response = await fetch(url.toString());
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
        return { error: error }
    }
}

//FUNCION PARA LIMPIAR LOS DATOS
function cardInformation(resultArcanosMayores) {
    const cardInfo = resultArcanosMayores.cards.map(card => {
        return {
            name: card.name,
            image: card.image,
            meaning_up: card.meaning_up,
            meaning_rev: card.meaning_rev,
            trabajo: card.trabajo,
            amor: card.amor,
            salud: card.salud,
            finanzas: card.finanzas,
            espiritualidad: card.espiritualidad,
        }
    })
    return cardInfo;
}

//FUNCION PARA MOSTRAR LOS ARCANOS MAYORES
async function getArcanosMayores() {
    const resultArcanosMayores = await fetchData('cards/type/mayor');
    const arcanosMayores = cardInformation(resultArcanosMayores);
    return arcanosMayores;
 }

 //FUNCION PARA OBTENER UNA CARTA RANDOM
async function getRandomCard(numberOfCards) {
    const cards = await getArcanosMayores();
    const selectedCards = [];
    while (selectedCards.length < numberOfCards) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        if (!selectedCards.includes(card)) {
            selectedCards.push(card);
        }
    }
    return selectedCards;
 }

export {
    getArcanosMayores,
    getRandomCard,
    cardInformation
}