const ticks = document.querySelectorAll('.tick');
let currentValue = -1;

function setValue(value) {
  const num = parseInt(value);

  if (isNaN(num) || num < 0 || num > 9) {
    alert("Введите число от 0 до 9.");
    return;
  }

  // Сброс предыдущего значения
  ticks.forEach(tick => tick.classList.remove('active'));

  // Установка нового значения
  currentValue = num;
  for (let i = 0; i <= currentValue; i++) {
    ticks[i].classList.add('active');
  }

  // Изменение стиля при значении > 5
  if (currentValue > 5) {
    document.body.classList.add('red-bg');
  } else {
    document.body.classList.remove('red-bg');
  }
}