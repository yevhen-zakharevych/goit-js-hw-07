const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
