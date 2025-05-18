function askAge() {
    let age;
    let confirmed = false;
  
    while (!confirmed) {
      age = prompt("Сколько вам лет?");
  
      if (age === null) {
        alert("Ввод отменён. Попробуйте снова.");
        continue;
      }
  
      age = age.trim();
  
      if (age === "") {
        alert("Пожалуйста, введите ваш возраст.");
        continue;
      }
  
      if (!/^\d+$/.test(age)) {
        alert("Введите корректное число.");
        continue;
      }
  
      const userAge = parseInt(age, 10);
  
      if (userAge <= 0) {
        alert("Возраст должен быть положительным числом.");
        continue;
      }
  
      confirmed = confirm(`Вы уверены, что вам ${userAge} лет?`);
    }
  
    document.getElementById("result").textContent = `Вам ${age} лет. Спасибо за подтверждение!`;
  }