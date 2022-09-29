let counter = document.querySelector(`#value`);
const btnMinus = document.querySelectorAll(`button`)[0];
const btnPlus = document.querySelectorAll(`button`)[1];
btnMinus.addEventListener(`click`, countMinus);
function countMinus() {
  counter.innerText -= 1;
}
btnPlus.addEventListener(`click`, countPlus);
function countPlus() {
  counter.innerText++;
}
