let pessoa = {
    nome: "Gabriel",
    idade: 15,
    falar: function() {
        return "Olá, tudo bem?";
    },
    dizerNome: function() {
        console.log(`O meu nome é ${this.nome}`);
    },
    aniversario: function() {
        this.idade += 1;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)