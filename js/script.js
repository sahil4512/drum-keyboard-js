function removePlaying(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playing(e) {
  const key_pressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key_pressed.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playing);
keys.forEach((key) => key.addEventListener("transitionend", removePlaying));
