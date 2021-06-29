const audioOn = new Audio("ls-on.mp3");
const audioColor = new Audio("switchcolor.mp3");
const audioOff = new Audio("ls-off.mp3");
const darksaberSound = new Audio("darksaber.mp3");
let activeColor = "";
let isSaberActive = false;

function lightsaber() {
  document.getElementById("on-off").onclick = ignition;
  document.getElementById("blue").onclick = colorChange;
  document.getElementById("green").onclick = colorChange;
  document.getElementById("purple").onclick = colorChange;
  document.getElementById("yellow").onclick = colorChange;
  document.getElementById("red").onclick = colorChange;
  document.getElementById("darksaber").onclick = colorChange;
}

function colorChange(event) {
  activeColor = event.target.id === "darksaber" ? "darksaber" : "";
  if (isSaberActive) {
    if (event.target.id === "darksaber") {
      darksaberSound.play();
      return;
    }
    audioColor.play();
  }
}

function ignition(checkboxEvent) {
  if (checkboxEvent.target.checked) {
    isSaberActive = true;
    activeColor === "darksaber" ? darksaberSound.play() : audioOn.play();
    return;
  }
  isSaberActive = false;
  audioOff.play();
}

window.addEventListener("click", lightsaber);

audioOn.volume = 0.2;
audioColor.volume = 0.2;
audioOff.volume = 0.3;
darksaberSound.volume = 0.6;