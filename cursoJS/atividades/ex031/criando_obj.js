let pessoa = {
    nome: "Gabriel",
    idade: 15,
    falar: function() {
        return "Olá, tudo bem?";
    },
    soma: function(a=0, b=0) {
        return a + b;
    }
};

console.log(pessoa.soma(1, 78));