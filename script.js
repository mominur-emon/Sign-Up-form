const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-background button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
