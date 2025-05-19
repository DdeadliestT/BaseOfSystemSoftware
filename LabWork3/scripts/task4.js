function submitForm() {
  const name = document.getElementById("nameInput").value.trim();
  const age = parseInt(document.getElementById("ageInput").value);
  const gender = document.getElementById("genderInput").value;
  const math = document.getElementById("mathSkill").checked;
  const prog = document.getElementById("progSkill").checked;
  const higher = document.getElementById("higherEdu").checked;
  const agree = document.getElementById("agreeCheckbox").checked;

  const resultSection = document.getElementById("resultSection");
  const checkResult = document.getElementById("checkResult");

  if (!name || !/^[а-яА-ЯёЁa-zA-Z\s]+$/.test(name)) {
    alert("Введите корректное имя.");
    return;
  }

  if (isNaN(age) || age < 0) {
    alert("Введите корректный возраст.");
    return;
  }

  if (!gender) {
    alert("Выберите пол.");
    return;
  }

  if (!agree) {
    alert("Вы должны согласиться с условиями.");
    return;
  }

  document.getElementById("formSection").style.display = "none";
  resultSection.style.display = "block";

  document.getElementById("nameInput").disabled = true;
  document.getElementById("ageInput").disabled = true;
  document.getElementById("genderInput").disabled = true;
  document.getElementById("mathSkill").disabled = true;
  document.getElementById("progSkill").disabled = true;
  document.getElementById("higherEdu").disabled = true;
  document.getElementById("agreeCheckbox").disabled = true;
  document.getElementById("commentInput").disabled = true;

  if (math && prog) {
    checkResult.textContent = "У вас есть знание математики и программирования.\nВас возьмут";
    checkResult.style.color = "#00ffff";
  } else {
    checkResult.textContent = "Похоже, вы нам не подходите.";
    checkResult.style.color = "#ff6666";
  }
}

function editForm() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("resultSection").style.display = "none";

  document.getElementById("nameInput").disabled = false;
  document.getElementById("ageInput").disabled = false;
  document.getElementById("genderInput").disabled = false;
  document.getElementById("mathSkill").disabled = true;
  document.getElementById("progSkill").disabled = true;
  document.getElementById("higherEdu").disabled = true;
  document.getElementById("agreeCheckbox").disabled = true;
  document.getElementById("commentInput").disabled = false;
}