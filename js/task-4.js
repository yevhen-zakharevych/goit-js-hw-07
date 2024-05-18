const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');

    return;
  }

  console.log({ email, password });
  formEl.reset();
}
