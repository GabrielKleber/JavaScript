// lenght

var nome = 'Gabriel';
console.log(nome.length);

// indexOf

var frase = 'O rato gosta de queijo';
console.log(frase.indexOf('gosta'));

// slice

var gosta = frase.slice(7, 12);
console.log(gosta);

// replace

var novaFrase = frase.replace('gosta', 'não gosta');
console.log(novaFrase);

// toLowerCase e toUpperCase

var frase_2 = 'Frase para Manipular';
console.log(frase_2.toLowerCase());
console.log(frase_2.toUpperCase());

// trim

var palavra = '                  oi                         ';
console.log(palavra);
console.log(palavra.trim());

// split

console.log(frase_2.split(' '))

// lastIndexOf

var teste = 'teste de teste para teste'

console.log(teste.lastIndexOf('teste'))