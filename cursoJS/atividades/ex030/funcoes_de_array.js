// length
var array = [1,2,3,4,5];
console.log(array.length);

// push
array.push(6);
array.push('Teste');
console.log(array);

// pop
array.pop();
console.log(array);

// unshift
array.unshift(0);
array.unshift('Teste');
console.log(array);

// shift
array.shift();
console.log(array);

// Acessando o último elemento
console.log(array[array.length - 1]);

// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(array));

// splice
array.splice(2, 0, 999); // onde eu quero colocar, quantidade de elementos que quero apagar, oque quero colocar
console.log(array);
array.splice(2, 1);
console.log(array);

// indexOf
console.log(array.indexOf(2));

// join
var array_2 = ["O", "rato", "gosta", "de", "queijo"];
console.log(array_2.join(" "));

// reverse
console.log(array_2.reverse());