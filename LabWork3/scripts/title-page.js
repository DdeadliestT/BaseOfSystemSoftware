function generateTitlePage() {
  const department = document.getElementById("department").value.trim();
  const group = document.getElementById("group").value.trim();
  const teacher = document.getElementById("teacher").value.trim();
  const student = document.getElementById("student").value.trim();

  const errorElement = document.getElementById("errorMessage");
  const preview = document.getElementById("titlePreview");

  if (!department || !group || !teacher || !student) {
    errorElement.textContent = "Пожалуйста, заполните все поля.";
    preview.style.display = "none";
    return;
  } else {
    errorElement.textContent = "";
    preview.style.display = "block";
  }

  document.getElementById("previewUniversity").innerHTML = `
    <img src="../images/stankin-logo-main-mono-white-ru-rgb.png " width="150px" height="auto-fit">
    <p><strong>Федеральное государственное автономное образовательное учреждение<br>
    высшего образования<br>
    «Московский государственный технологический университет «СТАНКИН»<br>
    (ФГАОУ ВО «МГТУ «СТАНКИН»)</strong></p>
    <p>Кафедра «${department}»</p>
  `;

  document.getElementById("previewGroup").textContent = group;
  document.getElementById("previewStudent").textContent = student;
  document.getElementById("previewTeacher").textContent = teacher;
}

function openInNewWindow() {
  const department = document.getElementById("department").value.trim();
  const group = document.getElementById("group").value.trim();
  const teacher = document.getElementById("teacher").value.trim();
  const student = document.getElementById("student").value.trim();

  if (!department || !group || !teacher || !student) {
    alert("Заполните все поля для корректной генерации.");
    return;
  }

  const win = window.open("", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <title>Титульный лист</title>
      <link rel="icon" href="https://raw.githubusercontent.com/DdeadliestT/BaseOfSystemSoftware/refs/heads/master/LabWork3/images/logo_stankin_without_word.ico" type="image/x-icon">
      <style>
        body {
          font-family: 'Times New Roman', serif;
          margin: 40px auto;
          max-width: 800px;
          line-height: 1.15;
          background-color: white;
          color: black;
          padding: 30px;
        }

        h1, h2, h3 {
          text-align: center;
        }

        .university {
          font-size: 20px;
          margin-bottom: 80px;
          text-align: center;
        }

        .centered {
          margin-top: 120px;
          font-size: 20px;
          text-align: center;
        }

        .info {
          margin-top: 100px;
          font-size: 18px;
        }

        .footer {
          margin-top: 150px;
          font-size: 18px;
          text-align: center;
        }

        .logo {
          display: block;
          width: 250px;
          height: auto;
          object-fit: contain;
          margin: 0 auto 20px;
        }
      </style>
    </head>
    <body>
      <img src="../images/stankin-logo.png " class="logo">

      <div class="university">
        <p>
          <strong>Федеральное государственное автономное образовательное учреждение<br>
          высшего образования<br>
          «Московский государственный технологический университет «СТАНКИН»<br>
          (ФГАОУ ВО «МГТУ «СТАНКИН»)</strong>
        </p>
        <p>Кафедра «${department}»</p>
      </div>

      <div class="centered">
        <h2>ОТЧЕТ</h2>
        <p>по лабораторной работе №3</p>
        <p>по дисциплине "ОСПО"</p>
      </div>

      <div class="info">
        <p><strong>Выполнил студент группы:</strong> ${group}</p>
        <p>${student}</p>
        <p><strong>Преподаватель:</strong> ${teacher}</p>
      </div>

      <div class="footer">
        <p>г. Москва 2025 г.</p>
      </div>
    </body>
    </html>
  `);

  win.document.close();
}
