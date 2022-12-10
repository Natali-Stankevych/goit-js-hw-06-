const button = {
  counter: document.querySelector(`#counter`),
  sub: document.querySelector(`[data-action="decrement"]`),
  add: document.querySelector(`[data-action="increment"]`)
}
console.log(button);
let counterValue = 0;

button.sub.addEventListener(`click`, decrement);

function decrement() {
  counterValue -= 1;
  document.getElementById(`value`).textContent = counterValue;
  console.log(decrement);
};


button.add.addEventListener(`click`, increment);

function increment() {
  counterValue += 1;
  document.getElementById(`value`).textContent = counterValue;
  console.log(increment)
};


