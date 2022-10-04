let nameIn = document.querySelector(`#name-input`);
let nameOut = document.querySelector(`#name-output`);
nameIn.addEventListener("input", (event) => {
  nameOut.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameOut.textContent = "Anonymous";
  }
});
