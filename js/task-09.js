function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector(`body`);
const buttonEl = document.querySelector(`.change-color`);
const colorIdEl = document.querySelector(`.color`);

buttonEl.addEventListener("click", (event) => {
  const random = getRandomHexColor();
  bodyEl.style.backgroundColor = random;
  colorIdEl.textContent = random;
});
