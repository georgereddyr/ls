var audioOn = new Audio("ls-on.mp3"),
  audioColor = new Audio("switchcolor.mp3"),
  audioOff = new Audio("ls-off.mp3");

function colorswitch(lscolor) {
  lscolor.target.removeEventListener('click', colorswitch);
  if (lscolor.target.checked) {
    audioColor.play();
    return;
  }
  audioColor.pause();
}
function lsonoff(checkbox) {
  checkbox.target.removeEventListener('click', lsonoff);
  if (checkbox.target.checked) {
    audioOn.play();
    return;
  }
  audioOff.play();
}
document.onclick = function toggleSaber() {
  var onoff = document.getElementById('on-off');
  onoff.addEventListener('click', lsonoff, false);

  const lscolor = document.querySelectorAll("input");
  lscolor.forEach((color) => {
    color.addEventListener("click", colorswitch, false);
  });
};

audioOn.volume = 0.2;
audioColor.volume = 0.2;
audioOff.volume = 0.2;