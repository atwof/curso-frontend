// Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// Operações aritméticas
console.log(2+4);
console.log(10-5);
console.log(5/1092);
console.log(4.5*9.222);

// Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(2/0);
console.log(10 * "s");

// Strings
console.log("Alisson");
console.log('Alisson');
console.log(`alisson`);
console.log(typeof "Alisson");
console.log(typeof 'Alisson');


// Mais strings
console.log("Testando o contra barra n \n nesse momento");
console.log("Espaçamento de \t tab");

// Concatenação
console.log("Oi, " + "tudo " + "bem?");
console.log(`Testando ` + `com a ` + `crase`);

// Interpolação de strings ou template strings
console.log(`A soma de 2 + 2 é: ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log(2222)}`);

// Boolean
console.log(true);
console.log(typeof true);
console.log(5 > 9);
console.log(5 < 9);

// Comparações
// === -> Idêntico
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// Comparação de idêntico
console.log(10 == "10");
console.log(10 === "10");
console.log(9 != '9');
console.log(9 !== '9');

// Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(true || true);
console.log(5 > 2 && 2 < 10)
console.log(5 < 2 && "Mateus" === "Alisson");
console.log(5 > 2 || "Matheus" === 1);
console.log(!true);
console.log(!5 > 2);