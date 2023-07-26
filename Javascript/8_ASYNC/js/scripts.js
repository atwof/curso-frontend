// setTimeOut -> Executado após um tempo
console.log("Ainda nao executou");
setTimeout(function () {
    console.log("Executou o setTimeOut");
}, 2000)
console.log("Ainda nao executou 2");

// setInterval -> Executa algo de tempo em tempo infinitamente
console.log("Ainda nao comecou");
// setInterval(function() {
//     console.log("Executou o setInterval");
// }, 3000)
console.log("Ainda nao comecou");

// Promises -> Execuções assíncronas
const promessa = Promise.resolve(5 + 5); // Irá executar a expressão
console.log("Algum codigo");

promessa.then(value => { // Retorna o valor e permite utilizar depois
    console.log(`A soma é ${value}`);
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora o valor é ${value}`));

console.log("Outro codigo");

// Falha na promise
Promise.resolve(4 * "aaa")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valor inválido");
    }
})
.catch((error) => console.log(`Um erro ocorreu: ${error}`));

// Rejeitando promises
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10) {
            resolve("O número é maior que 10");
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((n) => console.log(n))
.catch((error) => console.log(`Ocorreu o erro: ${error}`));

b.then((n) => console.log(n))
.catch((error) => console.log(`Ocorreu o erro: ${error}`));

// Resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1, p2, p3])
.then((values) => console.log(values));

// Async functions
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é ${value}`);
});

// Async Await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise, esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// Generators -> Asterísco nao está funcionando no mac
// fuction* generator() {
//     yield 1;
//     yield 2;
// }

// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);