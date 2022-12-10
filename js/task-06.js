const input = document.getElementById("validation-input");
console.log(input.value.length);
  input.onblur = function() {
  if (input.getAttribute('data-length') > input.value.length) { 
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
};

