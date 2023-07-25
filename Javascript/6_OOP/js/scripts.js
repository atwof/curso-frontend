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