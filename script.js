let isTalking = false;
const talkingImg = "images/felixImg.gif";
const static

function toggleTalk() {
    const img = document.getElementById("jorgebot");
    if (!isTalking) {
        img.src = "images/felixImg.gif"; 
    } else {
        img.src = "images/felixImg.webp";
    }
    isTalking = !isTalking;
}