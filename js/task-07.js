const sizeControlEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);
sizeControlEl.addEventListener(`input`, () => {
  const sizeValueEl = sizeControlEl.value;
  textEl.style.fontSize = `${sizeValueEl}px`;
});
