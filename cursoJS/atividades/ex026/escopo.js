var x = 1;
//ambas tem escopo global
var y = 3;

console.log(x, y);

function teste() {
    var z = 0;
    //Já essa tem o escopo local
    console.log(z);

    console.log(x);
}

teste()

function testando() {
    var z = 5;
    console.log(z);
}

testando();