const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  if (email.value === '' || password.value === '') {
    alert('You need to enter all fields');
  } else {
    const addEmail = email.value;
    const addPassword = password.value;
    console.log(addEmail, addPassword);

    const result = { email: email.value, password: password.value };
    console.log(result);
    console.log({ email: email.value, password: password.value });
  }
});
