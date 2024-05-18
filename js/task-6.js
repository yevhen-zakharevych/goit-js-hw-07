const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

createButtonEl.addEventListener('click', onCreate);
destroyButtonEl.addEventListener('click', onDestroy);

function onCreate(event) {
  const amount = Number(inputEl.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);

  inputEl.value = '';
}

function onDestroy(event) {
  destroyBoxes();
}

function createBoxes(amount) {
  const fragment = new DocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);

    size += 10;
  }

  boxesEl.append(fragment);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
