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

// Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    alert("Evento 1");
});

// Impedir que o evento ocorra em outros elementos
btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Evento 2");
});

// Removendo evento padrão
const google = document.querySelector("a");
google.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Nao deve abrir o site");
});

// Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla: ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla: ${e.key}`);
});

// Outros eventos de mouse
const mouse = document.querySelector("#mouse");
mouse.addEventListener("mousedown", () => {
    console.log("Mouse pressionado");
});

mouse.addEventListener("mouseup", () => {
    console.log("Mouse soltou");
});

mouse.addEventListener("dblclick", () => {
    console.log("Click duplo");
});

// Movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x: ${e.x}`);
    // console.log(`No eixo y: ${e.y}`);
});

// Evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        console.log("Passamos de 200px");
    }
});

// Evento de focus [entrou no elemento]  e blur [saiu do elemento]
// Pode ser usado nas validações do usuário
const input = document.querySelector("#my-input");
input.addEventListener("focus", () => {
    console.log("Entrou no input");
});

input.addEventListener("blur", () => {
    console.log("Saiu no input");
});

// Evento de carregamento da página
window.addEventListener("load", (e) => {
    console.log("A página carregou...");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});