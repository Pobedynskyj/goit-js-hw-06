let counterValue = document.querySelector(`#value`);
const btnMinus = document.querySelectorAll(`button`)[0];
const btnPlus = document.querySelectorAll(`button`)[1];
btnMinus.addEventListener(`click`, countMinus);
function countMinus() {
  counterValue.innerText--;
}
btnPlus.addEventListener(`click`, countPlus);
function countPlus() {
  counterValue.innerText++;
}
