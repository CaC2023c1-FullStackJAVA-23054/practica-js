const divResultado = document.getElementById("resultado");
const h1Titulo = document.getElementById("elTitulo");
const losLabels = document.getElementsByTagName("label");

h1Titulo.innerHTML = "Soy un hacker MUAJAJAJ";

const pSaludo = document.createElement("p");
pSaludo.innerHTML = "Hola, saludando desde el planeta JS";

divResultado.appendChild(pSaludo);

for (const elLabel of losLabels) {
    elLabel.innerHTML = elLabel.innerHTML.toUpperCase();
    elLabel.className = "texto-azul";
}