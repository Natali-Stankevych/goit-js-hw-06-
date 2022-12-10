const button = document.querySelector('.change-color');
const text = document.querySelector('.color');

button.addEventListener("click", changeColor);
function changeColor() {
    document.body.style.backgroundColor = [getRandomHexColor()];
    text.innerHTML = [getRandomHexColor()];
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
      .padStart(6, 0)}`;
   
}
