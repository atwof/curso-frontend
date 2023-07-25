// Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
}

console.log(animal.nome);
animal.latir();

// Aprofundando métodos
const pessoa = {
    nome: "Alisson",
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    }
};

console.log(pessoa.getNome());
pessoa.setNome("Carlos");
console.log(pessoa.getNome());

// Prototype
const texto = "Teste";
console.log(Object.getPrototypeOf(texto));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// Mais sobre prototype
const myObj = {
    a: 'b'
}
console.log(Object.getPrototypeOf(myObj));

const mySecondObj = Object.create(myObj);
console.log(mySecondObj);
console.log(mySecondObj.a);

// Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);

const bulldog = Object.create(cachorro);
bulldog.raca = "Budlldog";
console.log(bulldog);

// Função como classe - Função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Bulldog");
console.log(bob);

const jack = criarCachorro("Jack", "Pastor Alemão");
console.log(jack);

// Funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husk = new Cachorro("Pedro", "Husky");
console.log(husk);

// Métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu!")
}

husk.uivar();