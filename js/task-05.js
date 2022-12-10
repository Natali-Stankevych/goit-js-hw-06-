const input = document.getElementById('name-input');
let output = document.getElementById('name-output');
console.log(input);
console.log(output);

input.oninput = function (){
    if (input.value === ' ') {
        output.innerHTML = output.textContent;
    }
    output.innerHTML = input.value;
}

