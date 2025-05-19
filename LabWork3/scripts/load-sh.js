function fetchScript(url, elementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Ошибка при загрузке файла");
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).textContent = data;
      })
      .catch(error => {
        document.getElementById(elementId).textContent = "Не удалось загрузить файл:\n" + error.message;
      });
  }