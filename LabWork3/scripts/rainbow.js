const row = document.getElementById("rainbowRow");
let intervalId = null;

function getCells() {
  return Array.from(row.children);
}

function shiftDown() {
  const cells = getCells();
  const lastCell = cells.pop();
  const newCells = [lastCell, ...cells];

  // Очистить текущие ячейки
  row.innerHTML = "";

  // Перезаписать в новом порядке
  newCells.forEach(cell => row.appendChild(cell));
}

function shiftColors() {
  shiftDown();
}

function startAutoShift() {
  if (!intervalId) {
    intervalId = setInterval(shiftDown, 300);
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
  }
}

function stopAutoShift() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
  }
}