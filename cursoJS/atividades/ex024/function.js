function funcao() {
    console.log("Isso é uma função")
}

funcao();
funcao();
funcao();

function nome(nome) {
    console.log(`Olá, ${nome}`)
}

nome("Gabriel");
nome("Jorge");
nome("hfunwehfi");

function soma(a=0, b=0) {
    return a + b;
}

console.log(soma(1, 9));