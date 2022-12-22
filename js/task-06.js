const input = document.querySelector('#validation-input')
const inputLenght = input.dataset.length
input.addEventListener('blur', event => {
	const text = event.target.value;
	if (text.length === +inputLenght) {
		input.classList.add('valid')
		input.classList.remove('invalid')
		
	} else {
	
		input.classList.remove('valid')
		input.classList.add('invalid')
	}
		
})
