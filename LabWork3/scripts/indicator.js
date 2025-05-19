const ticks = document.querySelectorAll('.tick');
let currentValue = -1;

function setValue(value) {
  const num = parseInt(value);

  if (isNaN(num) || num < 0 || num > 9) {
    showMessage("Введите число от 0 до 9.", "error");
    return;
  }

  ticks.forEach(tick => tick.classList.remove('active'));

  for (let i = 0; i < num; i++) {
    ticks[i].classList.add('active');
  }

  if (num > 5) {
    document.getElementById("indicator").style.borderColor = "#ff6666";
    showMessage("Значение больше 5", "error");
  } else {
    document.getElementById("indicator").style.borderColor = "#444";
    showMessage(`Значение установлено: ${num}`, "success");
  }
}

function showMessage(message, type = "default") {
  const result = document.getElementById("resultMessage");
  result.textContent = message;

  if (type === "error") {
    result.classList.add("red");
  } else {
    result.classList.remove("red");
  }
}

function clearValue() {
  ticks.forEach(tick => tick.classList.remove('active'));
  currentValue = -1;
  document.getElementById("indicator").style.borderColor = "#444";
  showMessage("Значение сброшено.");
}