import ShowMazos from "./mazos.js";

export default class Form {
    constructor(type) {
        this.type = type;
        this.renderHtml();
    }
    renderHtml() {
        const page = document.getElementById('intro');
        if (page) {
            page.classList.remove('hidden-intro');
            page.classList.add('intro');
        }

        this.section = document.getElementById('form');
        this.section.innerHTML = '';
        this.section.classList.add('form');

        const mazosContainer = document.getElementById('mazos');
        mazosContainer.innerHTML = '';

        const respuestaContainer = document.getElementById('respuesta');
        respuestaContainer.innerHTML = '';

        if (this.type === 1) {
            const text1 = document.createElement('p');
            text1.setAttribute('class', 'presentacion');
            text1.innerText = 'Esta tirada te ofrece una única carta, que te responderá a una pregunta concreta sobre un tema de tu elección. Ideal para momentos de duda o cuando necesitas un "sí" o "no" claro. ¿Cuál es tu pregunta? Conéctate con tu intuición y elige sabiamente.';
            this.section.append(text1);
        } else {
            const text2 = document.createElement('p');
            text2.setAttribute('class', 'presentacion');
            text2.innerText = 'Para quienes buscan una visión más profunda, esta tirada revela tres cartas que proporcionan una respuesta más amplia sobre el tema que desees explorar. Te ayudará a comprender mejor las energías y posibilidades que te rodean. ¿Qué aspecto de tu vida deseas explorar? Permite que las cartas guíen tu camino hacia una mayor claridad.';
            this.section.append(text2);
        }

        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id', 'questionsFieldset');

        //PREGUNTA 1
        const questionNameLabel = document.createElement('div')
        const nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'nombre');
        nameLabel.innerText = '¿Cómo deseas que Selene te llame durante esta lectura?';
        const questionNameInput = document.createElement('div');
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.required = true;
        questionNameLabel.append(nameLabel);
        questionNameInput.append(nameInput);

        //PREGUNTA 2
        const questionYearLabel = document.createElement('div');
        const yearLabel = document.createElement('label');
        yearLabel.setAttribute('for', 'edad');
        yearLabel.innerText = 'Indica el año en que el cosmos te trajo a este mundo';
        const questionYearInput = document.createElement('div');
        const yearInput = document.createElement('input');
        yearInput.setAttribute('type', 'date');
        yearInput.required = true;
        questionYearLabel.append(yearLabel);
        questionYearInput.append(yearInput);

        //PREGUNTA 3
        const questionSignLabel = document.createElement('div');
        const signLabel = document.createElement('label');
        signLabel.setAttribute('for', 'signo');
        signLabel.innerText = '¿Cuál es tu signo? Esto ayudará a Selene a entender la energía de tu carta astral';
        const questionSignInput = document.createElement('div');
        const signInput = document.createElement('input');
        signInput.setAttribute('type', 'text');
        signInput.required = true;
        questionSignLabel.append(signLabel);
        questionSignInput.append(signInput);

        //PREGUNTA 4
        const questionThemeLabel = document.createElement('div');
        const themeLabel = document.createElement('label');
        themeLabel.setAttribute('for', 'tema');
        themeLabel.innerText = '¿Sobre qué aspecto de tu vida deseas recibir orientación?';
        const questionThemeSelect = document.createElement('div');
        const themeSelect = document.createElement('select');
        themeSelect.setAttribute('name', 'tema');
        themeSelect.required = true;
        const themeOption1 = document.createElement('option');
        themeOption1.setAttribute('value', '');
        themeOption1.innerText = 'Selecciona una opción';
        const themeOption2 = document.createElement('option');
        themeOption2.setAttribute('value', 'amor');
        themeOption2.innerText = 'Amor';
        const themeOption3 = document.createElement('option');
        themeOption3.setAttribute('value', 'salud');
        themeOption3.innerText = 'Salud';
        const themeOption4 = document.createElement('option');
        themeOption4.setAttribute('value', 'finanzas');
        themeOption4.innerText = 'Finanzas';
        const themeOption5 = document.createElement('option');
        themeOption5.setAttribute('value', 'trabajo');
        themeOption5.innerText = 'Trabajo';
        const themeOption6 = document.createElement('option');
        themeOption6.setAttribute('value', 'espiritualidad');
        themeOption6.innerText = 'Espiritualidad';
        themeSelect.append(themeOption1, themeOption2, themeOption3, themeOption4, themeOption5, themeOption6);
        questionThemeLabel.append(themeLabel);
        questionThemeSelect.append(themeSelect);

        //PREGUNTA 5
        const questionQueryLabel = document.createElement('div');
        const queryLabel = document.createElement('label');
        queryLabel.setAttribute('for', 'pregunta');
        queryLabel.innerText = 'Concentra tu mente y plantea la pregunta que deseas que Selene responda';
        const questionQueryInput = document.createElement('div');
        const queryInput = document.createElement('textarea');
        queryInput.setAttribute('type', 'text');
        queryInput.rows = 5;
        queryInput.cols = 30;
        queryInput.required = true;
        questionQueryLabel.append(queryLabel);
        questionQueryInput.append(queryInput);

        const sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'submit');
        sendButton.innerText = '¿Qué dicen las cartas?';
        this.section.addEventListener('submit', (e) => {
            e.preventDefault();
            this.section.innerHTML = '';
            mazosContainer.innerHTML = '';
            this.section.classList.remove('form');
            this.section.classList.add('hidden-form');
            ShowMazos(themeSelect.value, this.type);
        })

        this.section.append(fieldset);
        fieldset.append(questionNameLabel, questionNameInput, questionYearLabel, questionYearInput, questionSignLabel, questionSignInput, questionThemeLabel, questionThemeSelect, questionQueryLabel, questionQueryInput, sendButton);
        return fieldset;
    }
}