const selectHtml = document.querySelector("html");
const focusButton = document.querySelector(".app__card-button--foco");
const shortPeriodButton = document.querySelector(".app__card-button--curto");
const longPeriodButton = document.querySelector(".app__card-button--longo");

const focusBackground = focusButton.addEventListener("click", () => {
  selectHtml.setAttribute("data-contexto", "foco");
});

const shortPeriodBackground = shortPeriodButton.addEventListener("click", () => {
  selectHtml.setAttribute("data-contexto", "descanso-curto");
});

const longPeriodBackground = longPeriodButton.addEventListener("click", () => {
  selectHtml.setAttribute("data-contexto", "descanso-longo");
});
