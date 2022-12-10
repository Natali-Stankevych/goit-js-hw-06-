const input = document.getElementById(`name-input`);
const text = document.getElementById(`name-output`);
console.log(input);
console.log(text);

input.oninput = function() {
    if (input.value === '') {
        text.innerHTML = text.textContent;
    }
    text.innerHTML - input.value;
}
