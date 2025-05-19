let num1 = '';
let num2 = '';
let operator = null;

function addDigit(digit) {
  if (operator === null) {
    num1 += digit;
    document.getElementById("num1").value = num1;
  } else {
    num2 += digit;
    document.getElementById("num2").value = num2;
  }
}

function setOperator(op) {
  if (num1 !== '') {
    operator = op;
    document.getElementById("opDisplay").textContent = op;
  }
}

function calculate() {
  if (num1 === '' || num2 === '' || operator === null) {
    document.getElementById("result").textContent = "Заполните оба числа и выберите операцию";
    return;
  }

  const a = parseInt(num1);
  const b = parseInt(num2);
  let result;

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Ошибка'; break;
  }

  const resultElement = document.getElementById("result");
  if (result > 15) {
    resultElement.textContent = "число>15";
    resultElement.classList.add("red");
  } else {
    resultElement.textContent = result;
    resultElement.classList.remove("red");
  }
}

function clearAll() {
  num1 = '';
  num2 = '';
  operator = null;
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
  document.getElementById("opDisplay").textContent = '';
  document.getElementById("result").textContent = 'Результат';
  document.getElementById("result").classList.remove("red");
}