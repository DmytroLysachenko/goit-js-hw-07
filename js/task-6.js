function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input").value;
const createButton = document.querySelector('[data-action="create"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
console.log(input);
function createBoxes(input) {
  let boxes = [];
  for (let index = 0; index < input; index++) {
    const box = document.create;
  }
}
createButton.addEventListener("click");
