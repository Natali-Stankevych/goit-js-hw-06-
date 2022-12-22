
const counter = document.querySelector(`#value`);
const sub = document.querySelector(`[data-action="decrement"]`);
const add = document.querySelector(`[data-action="increment"]`);


let counterValue = 0;

sub.addEventListener(`click`, decrement);

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(decrement);
};


add.addEventListener(`click`, increment);

function increment() {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(increment)
};


