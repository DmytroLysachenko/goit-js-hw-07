function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("div#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
function createBoxes(event) {
  divBoxes.innerHTML = "";
  if (input.value < 1 || input.value > 100) {
    input.value = "";
    return alert("Please type number from 1 to 100");
  }
  for (let index = 0; index < input.value; index++) {
    divBoxes.insertAdjacentHTML("beforeend", "<div></div>");
    divBoxes.lastChild.style.backgroundColor = getRandomHexColor();
    divBoxes.lastChild.style.width = `${30 + index * 10}px`;
    divBoxes.lastChild.style.height = `${30 + index * 10}px`;
  }
  input.value = "";
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
