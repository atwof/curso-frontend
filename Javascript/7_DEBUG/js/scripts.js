// Strict
"use strict"; // Proteção contra problemas

// opa = "teste";
const opa = "Teste";

// const undefined = 10;

// console.log
let a = 1;
let b = 2;

if(a === 1) {
    a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if(a > 5) {
    a = 25;
}

console.log(a);

// Debugger
let c = 1;
let d = 2;

if(c === 1) {
    c = d + 2;
}

//debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
    console.log(c);
}

console.log("Executou o loop")

//debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
    console.log(c);
}

// Tratamento de dados
function checkNumber(number) {
    const restult = Number(number);

    if(Number.isNaN(restult)) {
        console.log("Valor incorreto");
        return;
    }

    console.log("Valor correto!")
    return restult;
}

checkNumber("a");
checkNumber(10);
checkNumber("10");
checkNumber();
checkNumber({});

// Exceptions
let x = 10;

// if(x !== 11) {
//     throw new Error("Valor inválido!");
// }

// Try Catch
try {
    const soma = x + y;
} catch (error) {
    console.log(error);
}

// Finally
try {
    const value = checkNumber("asd");

    if(!value) {
        throw new Error("Valor inválido");
    }
} catch(error) {
    console.log(error);
} finally {
    console.log("O código foi executado!")
}

// Assertions
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O array não possui valores válidos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

//checkArray([]);
checkArray([1,2,3]);