// script.js
document.getElementById('compareButton').addEventListener('click', function () {
    // Получаем значения из полей ввода
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
  
    // Получаем значения и удаляем пробелы
    const num1 = num1Input.value.trim();
    const num2 = num2Input.value.trim();
  
    // Проверяем, заполнены ли оба поля
    if (!num1 || !num2) {
      // Если одно из полей пустое, показываем ошибку
      resultDiv.textContent = 'Enter all the values.';
      resultDiv.className = 'result error';
      return;
    }
  
    // Проверяем, являются ли значения числами
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.textContent = 'Please enter valid numbers.';
      resultDiv.className = 'result error';
      return;
    }
  
    // Преобразуем строки в числа
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    // Находим минимальное значение
    const minNumber = Math.min(number1, number2);
  
    // Определяем сообщение
    let message;
    if (number1 === number2) {
      message = `${number1} is equal to ${number2}`;
    } else if (minNumber === number1) {
      message = `${number1} is less than ${number2}`;
    } else {
      message = `${number2} is less than ${number1}`;
    }
  
    // Отображаем результат
    resultDiv.textContent = message;
    resultDiv.className = 'result success';
  });