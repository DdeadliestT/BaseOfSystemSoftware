function generateTitlePage() {
    const department = document.getElementById("department").value.trim();
    const group = document.getElementById("group").value.trim();
    const teacher = document.getElementById("teacher").value.trim();
    const student = document.getElementById("student").value.trim();
  
    if (!department || !group || !teacher || !student) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
  
    // Открыть новое окно и записать HTML содержимое
    const win = window.open("", "_blank");
    win.document.write(`
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <title>Титульный лист</title>
        <style>
          body {
            font-family: 'Times New Roman', serif;
            margin: 40px;
            line-height: 1.6;
            text-align: center;
          }
  
          h1, h2, h3 {
            text-align: center;
          }
  
          .university {
            font-size: 20px;
            margin-bottom: 80px;
          }
  
          .info {
            margin-top: 100px;
            font-size: 18px;
          }
  
          .centered {
            margin-top: 120px;
            font-size: 20px;
          }
  
          .footer {
            margin-top: 150px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="university">
          <p><strong>Московский авиационный институт<br>(национальный исследовательский университет)</strong></p>
          <p>Кафедра «${department}»</p>
        </div>
  
        <div class="centered">
          <h2>ОТЧЕТ</h2>
          <p>по лабораторной работе №3</p>
          <p>по дисциплине "ОСПО"</p>
        </div>
  
        <div class="info">
          <p style="text-align: right;">Выполнил студент группы ${group}<br>${student}</p>
          <p style="text-align: right;">Преподаватель<br>${teacher}</p>
        </div>
  
        <div class="footer">
          <p>Москва – 2025</p>
        </div>
      </body>
      </html>
    `);
  
    win.document.close();
  }