const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value !== '' && passwordInput.value !== '') {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        console.log(formData);
        event.currentTarget.reset();
    } else {
        alert('Всі поля повинні бути заповнені'); 
    }
});

