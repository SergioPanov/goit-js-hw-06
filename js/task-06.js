const input = document.querySelector("#validation-input");
const requiredLength = parseInt(input.dataset.length);

input.addEventListener("blur", function () {
  const inputValue = input.value.trim();
  const isValid = inputValue.length === requiredLength;

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
