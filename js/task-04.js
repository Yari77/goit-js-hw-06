let counterValue = 0;
const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

valueSpan.textContent = counterValue;

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});
