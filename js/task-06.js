const input = document.getElementById('validation-input');
input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputBlur);

function onInputChange(event) {
  console.log(event.currentTarget.value);
}
function onInputBlur(event) {
  const userValue = event.currentTarget.value.length;
  console.log(userValue);
  const validLength = Number(input.dataset.length);
  console.log(validLength);

  input.classList.remove('valid', 'invalid');

  if (userValue === validLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
