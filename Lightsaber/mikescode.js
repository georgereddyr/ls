const audioOn = new Audio('ls-on.mp3'),
  audioColor = new Audio('switchcolor.mp3'),
  audioOff = new Audio('ls-off.mp3'),
  darksaberSound = new Audio('darksaber.mp3');

function lightsaber() {
  const onoff = document.getElementById('on-off'),
    blue = document.getElementById('blue'),
    green = document.getElementById('green'),
    purple = document.getElementById('purple'),
    yellow = document.getElementById('yellow'),
    red = document.getElementById('red'),
    darksaber = document.getElementById('darksaber');

  onoff.addEventListener("click", ignition);
  green.addEventListener('click', colorChange);
  blue.addEventListener('click', colorChange);
  red.addEventListener('click', colorChange);
  purple.addEventListener('click', colorChange);
  yellow.addEventListener('click', colorChange);
  darksaber.addEventListener('click', colorChange);
}

//color switch sound
function colorChange() {
  if (sessionStorage.getItem('active')) {
    audioColor.play();
  }
}

//lightsaber ignition&turn-off sound 
function ignition(checkbox) {
  checkbox.target.addEventListener('click', ignition);
  if (checkbox.target.checked) {
    sessionStorage.setItem('active', 'on');
    audioOn.play();
    return;
  }
  sessionStorage.removeItem('active');
  audioOff.play();
}


window.addEventListener('click', lightsaber);

audioOn.volume = 0.2;
audioColor.volume = 0.2;
audioOff.volume = 0.2;
