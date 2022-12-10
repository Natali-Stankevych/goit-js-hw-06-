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
};
console.log(`Email:#${email.value},
Password: ${password.value}`);
evt.currentTarget.reset();