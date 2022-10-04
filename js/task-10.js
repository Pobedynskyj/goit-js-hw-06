function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector(`input`);
const btnCreateEl = document.querySelector(`button[data-create]`);
const btnDestrEl = document.querySelector(`button[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);

btnCreateEl.addEventListener(`click`, () => {
  createBoxes(inputEl.value);
});
btnDestrEl.addEventListener(`click`, () => {
  boxesEl.innerHTML = "";
});

function createBoxes(amount) {
  if (amount) {
    boxesEl.innerHTML = "";
    let element = "";
    for (let i = 0; i < amount; i += 1) {
      element += `<div style="width:${30 + i * 10}px; height:${
        30 + i * 10
      }px; background-color:${getRandomHexColor()}"></div>`;
    }
    boxesEl.innerHTML = element;
  }
}
