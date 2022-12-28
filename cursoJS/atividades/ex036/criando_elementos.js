// Inserindo elemento no body
var novoParagrafo = document.createElement('p');
console.log(novoParagrafo);

var texto = document.createTextNode('Texto para o parágrafo criado');

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');
body.appendChild(novoParagrafo);

// Inserir em um conteiner
var conteiner = document.querySelector('#conteiner');
var el = document.createElement('span');
el.appendChild(document.createTextNode('Isso é um texto detro de um span dentro de uma div'));
console.log(el);
conteiner.appendChild(el);