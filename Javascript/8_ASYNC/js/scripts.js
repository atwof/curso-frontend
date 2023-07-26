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