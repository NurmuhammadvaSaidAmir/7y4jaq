const input = document.querySelector('.input');
const sendBtn = document.querySelector('.button');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('.number');

let currentNumber = 0;


sendBtn.addEventListener('click', () => {
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue)) {
        currentNumber = inputValue;
        number.textContent = currentNumber;
    }
});


plus.addEventListener('click', () => {
    currentNumber += 1;
    number.textContent = currentNumber;
});


minus.addEventListener('click', () => {
    currentNumber -= 1;
    number.textContent = currentNumber;
});