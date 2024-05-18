const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value.trim() || 'Anonymous';

  outputEl.textContent = value;
}
