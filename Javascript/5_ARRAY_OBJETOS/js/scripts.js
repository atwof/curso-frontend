// Array
const lista = [1,2,3,4,5];
console.log(lista);
console.log(typeof lista);

const items = ["Matheus", 12, true, "Teste"];
console.log(items);

// Acessar item em um array
const arr = ['a','b','c','d','e'];
console.log(arr[0]);

// Propriedades
const number = [1,2,3];
console.log(number.length);

const myString = "Alisson"
console.log(myString.length);

// Métodos
const otherNumbers = [1,2,3];

// Concatenar duas listas
const allNumbers = lista.concat(otherNumbers);
console.log(allNumbers);

const texto = "Meu texto";
console.log(texto.toUpperCase());
console.log(texto.toUpperCase().indexOf('E'));

// Objetos (Object Literals)
const pessoa = {
    name: "Alisson",
    age: 31,
    job: "Programador"
};

console.log(pessoa);
console.log(pessoa.name);
console.log(pessoa.name.length);
console.log(typeof pessoa);

// Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000
};

console.log(car);

// Adicionar uma propriedade ao objeto 
car.doors = 4;
console.log(car);

// Deletar uma propriedade do objeto
delete car.km
console.log(car);

// Mais sobre objetos
const obj = {
    a: "Teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);
console.log(obj);
console.log(obj2);

// Conhecendo melhor os objetos

// Keys -> Usado para saber as propriedades do objeto
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

// Entries -> Usado para saber as propriedades e o valore de cada propriedade 
console.log(Object.entries(obj));
console.log(Object.entries(obj2));
console.log(Object.entries(car));

// Mutação ou Mutability
const a = {
    name: "Alisson"
};

const b = a;
console.log(a, b);

console.log(a, b)