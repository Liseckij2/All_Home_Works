let inputEl = document.querySelector(".input"),
  btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  console.log(inputEl.value);
  inputEl.value = "";
});
