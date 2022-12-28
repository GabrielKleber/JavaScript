let x = 5; // Quase igual a var x = 5;

const y = 10;

// y = 12 
// não pode mudar o valor se não da erro

x = 12;

console.log('Fora do if: ' + x, y);

if(true) {
    let x = 20;
    const y = 50;
    console.log('If: ' + x, y);
    // O let e o const não altera a variavel se declarado em um bloco como o if
}

console.log('Fora do if: ' + x, y);