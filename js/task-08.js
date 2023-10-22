const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submin', (event) => {
    event.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value !== '' && passwordInput.value !== '') {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        console.log(formData);
    } else {
        alert('Всі поля повинні бути заповнені'); 
    }

    event.currentTarget.reset();
});
