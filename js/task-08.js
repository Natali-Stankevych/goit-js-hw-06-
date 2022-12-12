const form = document.querySelector('.login-form');
form.addEventListener("submit", handSabmat);

function handSabmat(evt) {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;
    if (!email.value || !password.value) {
        return alert('всі поля повинні бути заповнені');
    }
     
    const userDetails = { email: email.value, password : password.value}
    console.log(userDetails)
    
    
evt.currentTarget.reset();
};