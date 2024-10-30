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
        
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id', 'questionsFieldset');

        //PREGUNTA 1
        const questionName = document.createElement('div')
        const questionNameLabel = document.createElement('label')
        questionNameLabel.setAttribute('for', 'nombre');
        questionNameLabel.innerText = '¿Como te llamas?';
        const questionNameInput = document.createElement('input');
        questionNameInput.setAttribute('type', 'text');
        questionNameInput.required = true;
        questionName.append(questionNameLabel,questionNameInput);

        //PREGUNTA 2
        const questionYear = document.createElement('div');
        const questionYearLabel = document.createElement('label');
        questionYearLabel.setAttribute('for', 'edad');
        questionYearLabel.innerText = '¿En qué año naciste?';
        const questionYearInput = document.createElement('input');
        questionYearInput.setAttribute('type', 'number');
        questionYearInput.required = true;
        questionYear.append(questionYearLabel,questionYearInput);

        //PREGUNTA 3
        const questionSign = document.createElement('div');
        const questionSignLabel = document.createElement('label');
        questionSignLabel.setAttribute('for', 'signo');
        questionSignLabel.innerText = '¿Que signo zodiacal eres?';
        const questionSignInput = document.createElement('input');
        questionSignInput.setAttribute('type', 'text');
        questionSignInput.required = true;
        questionSign.append(questionSignLabel,questionSignInput);

        //PREGUNTA 4
        const theme = document.createElement('div');
        const themeLabel = document.createElement('label');
        themeLabel.setAttribute('for', 'tema');
        themeLabel.innerText = '¿Sobre que quieres preguntar?';
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
        questionLabel.innerText = 'Escribe aqui tu pregunta';
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
            if(this.type == 1){
                ShowMazos(themeSelect.value);
            } else {
                console.log('funciona');  
            }  
        })
    
        this.section.appendChild(fieldset);
        fieldset.append(questionName, questionYear, questionSign, theme, question, sendButton);
        return fieldset;
    }
}