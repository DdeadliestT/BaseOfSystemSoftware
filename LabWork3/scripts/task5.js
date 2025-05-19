const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

function toggleDescription(btn) {
  const desc = btn.previousElementSibling.nextElementSibling;
  if (desc.style.display === "block") {
    desc.style.display = "none";
    btn.textContent = "Показать больше";
  } else {
    desc.style.display = "block";
    btn.textContent = "Скрыть";
  }
}

function submitForm(e) {
  e.preventDefault();
  alert("Спасибо за ваше сообщение!");
}