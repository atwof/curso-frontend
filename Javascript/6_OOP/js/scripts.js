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
}

console.log(pessoa.getNome());
pessoa.setNome("Carlos");
console.log(pessoa.getNome());