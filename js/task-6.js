function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector("div#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector('button[data="create"]');
const destroyButton = document.querySelector('button[data="destroy"]');
const inputValue = input.value;
function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    divBoxes.insertAdjacentHTML("beforeend", "<div></div>");
    divBoxes.lastChild.style.backgroundColor = getRandomHexColor();
    divBoxes.lastChild.style.width = `${30 + index * 10}px`;
    divBoxes.lastChild.style.height = `${30 + index * 10}px`;
  }
  input.reset();
}

console.log(inputValue);

function destroyBoxes() {}

createButton.addEventListener("click", createBoxes(inputValue));
destroyButton.addEventListener("click", destroyBoxes);
