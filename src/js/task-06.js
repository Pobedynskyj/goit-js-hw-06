const validInputRef = document.querySelector("#validation-input");
validInputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (validInputRef.value.length === Number(validInputRef.dataset.length)) {
    validInputRef.classList.add("valid");
    validInputRef.classList.remove("invalid");
    return;
  } else {
    validInputRef.classList.remove("valid");
    validInputRef.classList.add("invalid");
  }
}
