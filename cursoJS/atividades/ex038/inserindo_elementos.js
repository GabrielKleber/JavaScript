// Criar elemento
var el = document.createElement('div');
el.classList = "div-criada";
console.log(el);

var conteiner = document.querySelector('#conteiner');

// inserindo elemento filho
conteiner.appendChild(el);

// insertBefore - insere antes
var el2 = document.createElement('div');
el2.classList = 'div-before';

conteiner.insertBefore(el2, el);