// Adicionando eventos
const btn = document.querySelector("#my-button");
btn.addEventListener("click", function() {
    alert("Clicou aqui");
});

// Removendo evento
const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
    alert("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    alert("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// Argumento de um evento
const myTtitle = document.querySelector("#my-title");
myTtitle.addEventListener("click", (event) => {
    alert(event);
    alert(event.offsetX);
    alert(event.pointerType);
    alert(event.target);
});