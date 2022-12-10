const input = document.querySelector('#font-size-control');
const text = document.getElementById('text');
console.log(input);
console.log(text);

input.oninput = function () {
    text.style.fontSize = input.value + 'px';
};