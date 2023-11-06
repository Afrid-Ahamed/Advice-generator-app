const advice_id = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const diceBtn = document.getElementById("dice");
// 1. Async function to get an advice
// 2. Parse it from JSON to OBJECT
// 3. Extract only ID and advice text
// 4. Display an advice on page load itself
// 5. On button click make async function call and display a new ID and advice text

async function fetchAdvice() {
  advice_id.innerText = "";
  adviceText.innerText = "";
  let response = await fetch("https://api.adviceslip.com/advice");
  let { slip } = await response.json();
  let { id, advice } = slip;
  advice_id.innerText = `ADVICE # ${id}`;
  adviceText.innerText = `"${advice}"`;
}
window.addEventListener("load", fetchAdvice);
diceBtn.addEventListener("click", fetchAdvice);
