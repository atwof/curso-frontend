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

// Loop em arrays
const users = ["alisson", "paulo", "teste", "Caros"];

// For
for (let i = 0; i < users.length; i++) {
    console.log(`Usuário ${users[i]}`);
}

// Foreach
users.forEach(element => {
    console.log(element);
});

// Push e pop
const t = [1,2,3,4,5,6];
console.log(t);

// Adicionar item na última posição
t.push(10);
t.push(20,30,40);
console.log(t);

// Remover um item
const itemRemovido = t.pop(); // Retorna o item removido
console.log(itemRemovido);
console.log(t);

// Shift e unshift
// shift = pop
// unshift = push
const num = [1,2,3,4,5]; // Remove o primeiro item do array
const l = num.shift(); // Retorna o item removido
console.log(num, l);

num.unshift(20,30,40); // Adiciona ao início do array
console.log(num);

// indexOf e lastIndexOf
const fruits = ["morango", "maça", "abacate", "pera", "abacate"];

console.log(fruits.indexOf("abacate"));
console.log(fruits.lastIndexOf("abacate"));

console.log(fruits[2]);
console.log(fruits[fruits.indexOf("maça")]);

// Slice = subString de outras linguagens
const testeSlice = ['a','b','c','d','e'];
const subArray = testeSlice.slice(2,4); // Pega sempre o índice final - 1
console.log(testeSlice);
console.log(subArray);

const subArray1 = testeSlice.slice(2); // Pega todos do índice inicial até o fim
console.log(subArray1);

// Foreach
const nums = [1,2,3,4,5,6];

nums.forEach((numero) => {
    console.log(`Número é ${numero}`);
});

const posts = [
    {
        title: "Primeiro Post",
        category: "PHP"
    },
    {
        title: "Segundo Post",
        category: "JAVA"
    },
    {
        title: "Terceiro Post",
        category: "C++"
    },
]

posts.forEach((post) => {
    console.log(`Exibindo o ${post.title} da catergoria ${post.category}`);
})

// Includes
const marcas = ["BMW", "VW", "FIAT"];
console.log(marcas.includes("FIAT"));
console.log(marcas.includes("Peugeot"));

if(marcas.includes("BMW")) {
    console.log("Existem carros da marca BMW");
}

// Reverse - Ordenação
const reverseTest = [1,2,3,4,5];
console.log(reverseTest);
reverseTest.reverse();
console.log(reverseTest);

// Métodos de strings //

// Trim
const nome = "  Alisson \n     ";
console.log(nome);
console.log(nome.trim());

// padStart
const testePadStart = "1";
const serial = testePadStart.padStart(4, "0");
console.log(testePadStart);
console.log(serial);

// padEnd
const testPadEnd = serial.padEnd(10, "#");
console.log(testPadEnd);

// Split - Separar uma string com base em um delimitador
const frase = "O rato roeu a roupa do rei de Roma";
const arrayFrase = frase.split(" ");
console.log(frase);
console.log(arrayFrase);

// Join - Unir uma string com base em um delimitador
const fraseNova = arrayFrase.join(" ");
console.log(arrayFrase);
console.log(fraseNova);

const itemCompra = ["Mouse", "Teclado", "Monitor"];

const fraseCompra = `Precisamos comprar: ${itemCompra.join(", ")}.`;
console.log(itemCompra);
console.log(fraseCompra);

// Repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// Rest Operator / Rest Parameters
const somaInfinita = (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1,2,3,4));

// For...of
const somaInf2 = (...args) => {
    let total = 0;

    for(numbereros of args) {
        total += numbereros;
    }

    return total;
}

console.log(somaInf2(1,2,3,4,5));
console.log(somaInf2(1,2,3,4,1212,1221,12,12,12121212,121212,211212.5));

// Destructuring em objetos
const userDetails = {
    firstName: "Alisson",
    lastName: "Fritzen",
    job: "Programador"
};

const {firstName: teste, lastName, job} = userDetails;
console.log(teste, lastName, job);

// Renomear variáveis
const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);

// Destructuring em arrays
const myList = ["aviao", "submarino", "carro"];

const[aviao, sub, carro] = myList;
console.log(myList);
console.log(aviao, sub, carro);

// JSON
const myJSON = '{"name": "Alisson", "age": 31, "skills": ["PHP", "CSharp", "HTML"]}'
console.log(myJSON);

// JSON para objeto e objeto para JSON
const myObj = JSON.parse(myJSON);
console.log(myObj);
console.log(myObj.name);

// JSON inválido
const badJSON = '{"name": Alisson, "age": 29}'
//const myBadObj = JSON.parse(badJSON);

myObj.isOpenToWork = true;

const jsonTeste = JSON.stringify(myObj);
console.log(jsonTeste);