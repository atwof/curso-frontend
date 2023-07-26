// Selecionar os elementos
const multiForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiInput = document.querySelector("#multiplicator");

// Funções

// Eventos
multiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = multiInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;
});