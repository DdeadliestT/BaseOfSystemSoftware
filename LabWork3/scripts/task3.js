function askAge() {
  const resultElement = document.getElementById("result");
  let ageInput;

  while (true) {
    ageInput = prompt("Введите ваш возраст:");

    if (ageInput === null) {
      resultElement.textContent = "Ввод отменён.";
      resultElement.style.color = "#ff6666";
      return;
    }

    const age = parseInt(ageInput);

    if (!isNaN(age) && age >= 0) {
      const isCorrect = confirm(`Вам ${age} лет?`);

      if (isCorrect) {
        resultElement.textContent = `Возраст подтверждён: ${age}`;
        resultElement.style.color = "#00ffff";
        break;
      } else {
        continue;
      }
    } else {
      if (confirm("Неверное значение. Хотите попробовать снова?")) {
        continue;
      } else {
        resultElement.textContent = "Ввод прерван пользователем.";
        resultElement.style.color = "#ff6666";
        break;
      }
    }
  }
}