// Movendo-se pelo DOM -> Para HTMLs simples
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent)

// Selecionando elementos por TAG
const elementosPorTag = document.getElementsByTagName("li");
console.log(elementosPorTag);

// Selecionando elemento por ID
const elementoPorId = document.getElementById("title");
console.log(elementoPorId);

// Selecionando elementos por classe
const elementosPorClasse = document.getElementsByClassName("product");
console.log(elementosPorClasse[1]);

// Selecionando elementos por seletor de CSS
const elementosPorSeletorCSS = document.querySelectorAll(".product");
console.log(elementosPorSeletorCSS);

const elementoPorSeletorCSS = document.querySelector("#main-container");
console.log(elementoPorSeletorCSS);

// Alterando HTML usando o DOM - insertBefore
const p = document.createElement("p");
console.log(p);

const header = elementoPorId.parentElement;
console.log(header);

header.insertBefore(p, title);

// Alterando HTML usando o DOM - appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// Alterando HTML usando o DOM - replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título";

header.replaceChild(h2, title);

// Alterando HTML usando DOM - createTextNode
const myText = document.createTextNode("Mais um título");
const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);
elementoPorSeletorCSS.appendChild(h3);
