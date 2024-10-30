import ShowMazos from "./mazos.js";

export default class Form {
    constructor(type) {
        this.type = type;
        this.renderHtml();
    }
    renderHtml() {
        this.section = document.getElementById('form');
        this.section.innerHTML = '';

        const container = document.getElementById('mazos');
        container.innerHTML = '';

        const container1 = document.getElementById('respuesta');
        container1.innerHTML = '';
        
        const container2 = document.getElementById('respuesta-texto');
        container2.innerHTML = '';

        this.textContainer = document.getElementById('presentacion')
        this.textContainer.innerHTML = '';
        
        if (this.type === 1) {
            const text1 = document.createElement('p');
            text1.setAttribute('class', 'presentacion');
            text1.innerText = 'Esta tirada te ofrece una única carta, que te responderá a una pregunta concreta sobre un tema de tu elección. Ideal para momentos de duda o cuando necesitas un "sí" o "no" claro. ¿Cuál es tu pregunta? Conéctate con tu intuición y elige sabiamente.';
            this.textContainer.appendChild(text1);
        } else {
            const text2 = document.createElement('p');
            text2.setAttribute('class', 'presentacion');
            text2.innerText = 'Para quienes buscan una visión más profunda, esta tirada revela tres cartas que proporcionan una respuesta más amplia sobre el tema que desees explorar. Te ayudará a comprender mejor las energías y posibilidades que te rodean. ¿Qué aspecto de tu vida deseas explorar? Permite que las cartas guíen tu camino hacia una mayor claridad.';
            this.textContainer.appendChild(text2);
        }

        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id', 'questionsFieldset');
        
        //PREGUNTA 1
        const questionName = document.createElement('div')
        const questionNameLabel = document.createElement('label')
        questionNameLabel.setAttribute('for', 'nombre');
        questionNameLabel.innerText = '¿Cómo deseas que Selene te llame durante esta lectura?';
        const questionNameInput = document.createElement('input');
        questionNameInput.setAttribute('type', 'text');
        questionNameInput.required = true;
        questionName.append(questionNameLabel,questionNameInput);

        //PREGUNTA 2
        const questionYear = document.createElement('div');
        const questionYearLabel = document.createElement('label');
        questionYearLabel.setAttribute('for', 'edad');
        questionYearLabel.innerText = 'Indica el año en que el cosmos te trajo a este mundo';
        const questionYearInput = document.createElement('input');
        questionYearInput.setAttribute('type', 'date');
        questionYearInput.required = true;
        questionYear.append(questionYearLabel,questionYearInput);

        //PREGUNTA 3
        const questionSign = document.createElement('div');
        const questionSignLabel = document.createElement('label');
        questionSignLabel.setAttribute('for', 'signo');
        questionSignLabel.innerText = '¿Cuál es tu signo? Esto ayudará a Selene a entender la energía de tu carta astral';
        const questionSignInput = document.createElement('input');
        questionSignInput.setAttribute('type', 'text');
        questionSignInput.required = true;
        questionSign.append(questionSignLabel,questionSignInput);

        //PREGUNTA 4
        const theme = document.createElement('div');
        const themeLabel = document.createElement('label');
        themeLabel.setAttribute('for', 'tema');
        themeLabel.innerText = '¿Sobre qué aspecto de tu vida deseas recibir orientación?';
        const themeSelect = document.createElement('select');
        themeSelect.setAttribute('name', 'tema');
        themeSelect.required = true;
        const themeOption1 = document.createElement('option');
        themeOption1.setAttribute ('value', '');
        themeOption1.innerText = 'Selecciona una opción';
        const themeOption2 = document.createElement('option');
        themeOption2.setAttribute ('value', 'amor');
        themeOption2.innerText = 'Amor';
        const themeOption3 = document.createElement('option');
        themeOption3.setAttribute ('value', 'salud');
        themeOption3.innerText = 'Salud';
        const themeOption4 = document.createElement('option');
        themeOption4.setAttribute ('value', 'finanzas');
        themeOption4.innerText = 'Finanzas';
        const themeOption5 = document.createElement('option');
        themeOption5.setAttribute ('value', 'trabajo');
        themeOption5.innerText = 'Trabajo';
        const themeOption6 = document.createElement('option');
        themeOption6.setAttribute ('value', 'espiritualidad');
        themeOption6.innerText = 'Espiritualidad';
        themeSelect.append(themeOption1, themeOption2, themeOption3, themeOption4, themeOption5, themeOption6);
        theme.append(themeLabel,themeSelect);
        
        //PREGUNTA 5
        const question = document.createElement('div');
        const questionLabel = document.createElement('label');
        questionLabel.setAttribute('for', 'pregunta');
        questionLabel.innerText = 'Concentra tu mente y plantea la pregunta que deseas que Selene responda';
        const questionInput = document.createElement('input');
        questionInput.setAttribute('type', 'text');
        questionInput.required = true;
        question.append(questionLabel,questionInput);

        const sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'submit');
        sendButton.innerText = '¿Qué dicen las cartas?';
        this.section.addEventListener('submit', (e) => {
            e.preventDefault();
            this.section.innerHTML = '';
            this.textContainer.innerHTML = '';
            ShowMazos(themeSelect.value, this.type);
    
        })
    
        this.section.append(fieldset);
        fieldset.append(questionName, questionYear, questionSign, theme, question, sendButton);
        return fieldset;
    }
}