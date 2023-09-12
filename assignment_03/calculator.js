let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let isSecondNumber = false;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#calculator').addEventListener('click', function(e) {
    const target = e.target;
    const value = target.innerText;

    if (target.matches('.btn-outline-dark')) {
      handleButtonPress(value);
    }
  });
});

function handleButtonPress(value) {
  if (value === 'AC') {
    resetCalculator();
  } else if (value === '=') {
    calculateResult();
  } else if (['+', '-', 'x', '/'].includes(value)) {
    setOperation(value);
  } else {
    updateDisplay(value);
  }
}

function resetCalculator() {
  firstNumber = '';
  secondNumber = '';
  currentOperation = null;
  isSecondNumber = false;
  document.querySelector('#display').value = '0';
}

function setOperation(operation) {
  if (firstNumber !== '') {
    currentOperation = operation;
    isSecondNumber = true;
    document.querySelector('#display').value = '0';
  }
}

function updateDisplay(number) {
  const display = document.querySelector('#display');
  if (isSecondNumber) {
    secondNumber += number;
    display.value = secondNumber;
  } else {
    firstNumber += number;
    display.value = firstNumber;
  }
}

function calculateResult() {
  let result;
  if (currentOperation === '+') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (currentOperation === '-') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (currentOperation === 'x') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (currentOperation === '/') {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }

  document.querySelector('#display').value = result.toString();
  firstNumber = result;
  secondNumber = '';
  isSecondNumber = false;
}
