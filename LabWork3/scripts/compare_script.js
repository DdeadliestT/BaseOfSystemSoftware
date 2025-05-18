function compareNumbers() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const resultDiv = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        resultDiv.textContent = 'Пожалуйста, введите оба числа.';
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        resultDiv.textContent = 'Пожалуйста, введите корректные числа.';
        resultDiv.className = 'result error';
        resultDiv.style.display = 'block';
        return;
    }

    const minValue = Math.min(a, b);
    resultDiv.textContent = `Минимальное значение: ${minValue}`;
    resultDiv.className = 'result success';
    resultDiv.style.display = 'block';
}
