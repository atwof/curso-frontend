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

// Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

// Mais sobre classes
class Caminhao {
    constructor(numeroEixos, corCaminhao) {
        this.numeroEixos = numeroEixos;
        this.corCaminhao = corCaminhao;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.numeroEixos} eixos e é da cor ${this.corCaminhao}`);
    }
}

const scania = new Caminhao(6, "Vermelho");
console.log(scania);
scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(4, "Azul");
console.log(c3);

// Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`);
    }
}

const Alisson = new Humano("Alisson", 29);
console.log(Alisson);
Alisson.toString();

const teste = new Humano("Teste");
teste.toString();

// Symbols em classes -> Valores constantes em classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const pilotos = Symbol();
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// Setters e getters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Teste", "É um post");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programacao, javascript, react";
console.log(myPost);