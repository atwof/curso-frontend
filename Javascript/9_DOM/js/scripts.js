// Movendo-se pelo DOM -> Para HTMLs simples
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent)

// Selecionando elementos por TAG
const elementosPorTag = document.getElementsByTagName("li");
console.log(elementosPorTag);