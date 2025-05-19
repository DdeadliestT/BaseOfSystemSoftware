let admin;
let name;

function saveName() {
  const input = document.getElementById("nameInput");
  const output = document.getElementById("adminOutput");

  const enteredName = input.value.trim();

  if (enteredName === "") {
    output.textContent = "Пожалуйста, введите имя.";
    output.style.color = "#ff6666";
    return;
  }

  if (!/^[а-яА-ЯёЁa-zA-Z\s]+$/.test(enteredName)) {
    output.textContent = "Введите корректное имя (только буквы).";
    output.style.color = "#ff6666";
    return;
  }

  admin = enteredName;
  output.textContent = "admin = " + admin;
  output.style.color = "#00ffff";
}