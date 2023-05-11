const elTitulo = document.getElementById("elTitulo");
const textAreaMensaje = document.getElementById("mensaje");
const btnEmoji = document.getElementById("btnEmoji");
const visorDeEmoji = document.getElementById("visorDeEmoji");
const msjCaractDisp = document.getElementById("mensajeCaracteresDisponibles");
const listaInputs = document.getElementsByTagName("input");

const emojis = ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','🫠','😉','😊','😇','🥰','😍','🤩','😘','😗','☺','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🫢','🫣','🤫','🤔','🫡','🤐','🤨','😐','😑','😶','🫥','😶‍🌫️','😏','😒','🙄','😬','😮‍💨','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴'];

for (const input of listaInputs) {
    input.onmouseover = cambiarColor;
}

function cambiarColor(infoEvento) {
    const elemento = infoEvento.target;
    elemento.style.background = generarColorRandom();
}

function numRandom(hastaSinIncluir) {
    return Math.trunc(Math.random() * hastaSinIncluir)
}

function generarColorRandom() {    
    return `rgb(${numRandom(256)},${numRandom(256)},${numRandom(256)})`;
}


btnEmoji.onclick = function() {
    let posRandom = Math.trunc(Math.random() * emojis.length);
    visorDeEmoji.innerHTML = emojis[posRandom];
}

const LIMITE = 10;
textAreaMensaje.onkeyup = function() {
    let cuantosEscritos = textAreaMensaje.value.length;
    console.log(cuantosEscritos)
    msjCaractDisp.innerHTML = `Le quedan ${LIMITE - cuantosEscritos} disponibles`;
}

function alertar () {
    alert("Algo pasó...");
}

elTitulo.onclick = alertar;
//textAreaMensaje.onmouseover = alertar;