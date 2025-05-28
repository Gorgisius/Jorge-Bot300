const inicios = [
  "Sin duda",
  "Parece que sí",
  "No cuentes con ello",
  "Definitivamente",
  "Improbable",
  "Todo indica que no",
  "Con toda certeza",
  "Es posible",
  "Muy probable",
  "Lo dudo mucho"
];

const centros = [
  "según las estrellas",
  "por lo que veo",
  "considerando tu energía",
  "en este momento",
  "si no haces cambios",
  "a juzgar por tu pregunta",
  "basado en el destino",
  "si el viento sopla a favor",
  "mirando profundamente",
  "según los antiguos"
];

const finales = [
  "todo se resolverá solo.",
  "deberías pensarlo dos veces.",
  "no parece buena idea.",
  "te irá bien.",
  "recibirás señales pronto.",
  "nada es seguro.",
  "los caminos están abiertos.",
  "será un viaje complicado.",
  "el tiempo lo dirá.",
  "actúa con cautela."
];

function respuestaAleatoria() {
    const inicio = inicios[Math.floor(Math.random() * inicios.length)];
    const centro = centros[Math.floor(Math.random() * centros.length)];
    const final = finales[Math.floor(Math.random() * finales.length)];
    return `${inicio}, ${centro}, ${final}`;
}
//^^^^ Hacer una respuesta

const talkingImg = "images/felixImg.gif";
const staticImg = "images/felixImg.webp";
const userInput = document.getElementById("userInput");
let intervalo;
let indice = 0;

function giveAnswer() {
    const userInput = document.getElementById("userInput").value.trim();
    const img = document.getElementById("jorgebot");
    let answer = "";
    const espacio = document.getElementById("respuesta");
    espacio.textContent = "";
    indice = 0;

    img.src = "images/felixImg.gif"; // Cambia a la imagen de hablar

    if (userInput === "") {
        answer = "Has una pregunta wey...";
    } else {
        answer = respuestaAleatoria();
    }

    clearInterval(intervalo);
    intervalo = setInterval(() => {
        if (indice < answer.length) {
            espacio.textContent += answer.charAt(indice);
            indice++;
        } else {
            clearInterval(intervalo);
            img.src = "images/felixImg.webp"; // Cambia a la imagen estática al finalizar
        }
    }, 50);

}