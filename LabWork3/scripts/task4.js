function validateName(name) {
    return /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(name.trim());
  }
  
  function validateAge(age) {
    const num = parseInt(age, 10);
    return !isNaN(num) && num >= 0;
  }
  
  function validateGender(gender) {
    return gender === 'М' || gender === 'Ж';
  }
  
  function check() {
    const math = document.getElementById("mathSkill").checked;
    const prog = document.getElementById("progSkill").checked;
    const higher = document.getElementById("higherEdu").checked;
  
    // Условие 1: математика + программирование
    if (math && prog) return true;
  
    // Условие 2: высшее + хотя бы 2 из 3 навыков
    let skillCount = 0;
    if (math) skillCount++;
    if (prog) skillCount++;
    if (document.getElementById("agreeCheckbox").checked) skillCount++;
  
    if (higher && skillCount >= 2) return true;
  
    return false;
  }
  
  function submitForm() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const gender = document.getElementById("genderInput").value;
  
    if (!validateName(name)) {
      alert("Введите корректное имя (только буквы).");
      return;
    }
  
    if (!validateAge(age)) {
      alert("Введите корректный возраст (неотрицательное число).");
      return;
    }
  
    if (!validateGender(gender)) {
      alert("Выберите пол.");
      return;
    }
  
    // Все поля заполнены
    document.getElementById("formSection").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
  
    const resultText = check()
      ? "Вы подходите!"
      : "Попробуйте улучшить свои навыки.";
    document.getElementById("checkResult").textContent = resultText;
  
    // Блокируем чекбоксы
    document.querySelectorAll("#mathSkill, #progSkill, #higherEdu, #agreeCheckbox").forEach(el => {
      el.disabled = true;
    });
  }
  
  function editForm() {
    document.getElementById("formSection").style.display = "block";
    document.getElementById("submitBtn").style.display = "inline-block";
    document.getElementById("resultSection").style.display = "none";
  
    document.querySelectorAll("#mathSkill, #progSkill, #higherEdu, #agreeCheckbox").forEach(el => {
      el.disabled = false;
    });
  }