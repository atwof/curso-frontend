// Variáveis
let nome = "Matheus";
console.log(nome);

nome = "Alisson";
console.log(nome);

const idade = 29;
console.log(idade);

// Não é permitido dessa forma
//let 2teste = "Alisson";
//let @teste = "Alisson";

// Não é o mais indicado
let a = 10, b = 20, c = 30;
console.log(a,b,c);

// Melhor forma para declaração de variáveis
let x = 10;
let y = 20;
let z = 30;

// Case sensitive
const nomecompleto = "Alisson F. Fritzen";
const nomeCompleto = "Alisson"
console.log(nomecompleto, nomeCompleto);

// Permitido
let _teste = "teste";
let $teste = "teste";
console.log(_teste, $teste);

// Solicitar digitação do usuário
// let v = prompt("Digite um número");
// console.log(v);

// Exibir alguma informação na tela
// const p = 10;
// alert("Testando")
//alert(`O número é ${p}`);

// Math.x
console.log(Math.max(1,66,4,2,34,444));
console.log(Math.floor(5.4));
console.log(Math.ceil(5.22));

// Console.x
console.log("Log!");
console.error("Erro!");
console.warn("Aviso!");

// IF
const m = 2;

if (m > 5) {
    console.log("M é maior do que 5")
} else {
    console.log("M não é maior do que 5");
}

const user = "Alisson";

if(user === "Alisson") {
    console.log(`Olá, ${user}!`);
} else {
    console.log("Usuário não reconhecido!");
}

// ELSE IF
if(1 > 2) {
    console.log("Falso");
} else if(1 > 3) {
    console.log("Falso");
} else if(1 < 2) {
    console.log("Verdadeiro");
}

const userName = "Alisson";
const userAge = 29;

if(userName === "Alissohn") {
    console.log(`Olá, ${userName}`);
} else if(userName === "Alisson" && userAge === 29) {
    console.log(`Olá, ${userName}, você tem ${userAge} anos!`);
} else {
    console.log("Nenhuma conta encontrada!");
}

// Estrutura de repetição
let o = 0;

while(o < 5) {
    console.log(`Repetindo ${o}`);
    o = o + 1;
}

// Loop infinito
// let xx = 10;
// while(x < 10) {
//     console.log(x)
// }

// Do While
let aa = 20;

do {
    console.log(`O valor de aa é ${aa}`)
    aa--;
} while(aa > 0)

// FOR
for(let t = 0; t < 100; t++) {
    console.log("Repetindo algo...");
}

let r = 20;
for(r; r > 0; r--) {
    console.log("Repetindo o r...");
}

// Identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10! -> ${u} `);
    } else {
        if(u / 2 === 0) {
            console.log("Deu zero!");
        }
    }
}

// Saída de um loop - break
for(let g = 20; g > 10; g--) {
    console.log(`Valor de g é ${g}`);

    if(g === 12) {
        console.log("O G é 12")
        break;
    }
}

// Continue
for(let s = 0; s < 10; s++) {
    if(s % 2 === 0) {
        console.log(`O número ${s} é par!`)
        continue;
    }
    console.log(s);
}

// Switch
const job = "Advogados";

switch(job) {
    case "Advogado":
        console.log("Você é advogado");
        break;
    case "Programador":
        console.log("Você é programador");
        break;
    case "Ator":
        console.log("Você é ator");
        break;
    default:
        console.log("Profissão não encontrada!");
}

// Switch de forma incorreta, sem a atributo break
const l = 100;

switch(l) {
    case 2:
        console.log("Você é advogado");
    case 100:
        console.log("Você é programador");
    case "Ator":
        console.log("Você é ator");
    default:
        console.log("Profissão não encontrada!");
}

// Convenção para declaração de variáveis
let programadorcadastrado; // Pior forma de declaração
let programador_cadastrado;
let ProgramadorCadastrado;
let programadorCadastrado; // Melhor forma = CamelCase