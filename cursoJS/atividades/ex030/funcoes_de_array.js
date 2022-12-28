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