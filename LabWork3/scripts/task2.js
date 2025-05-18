let admin;
let name;

function saveName() {
  name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Пожалуйста, введите имя.");
    return;
  }
  admin = name;
  document.getElementById("adminOutput").textContent = "admin = " + admin;
}