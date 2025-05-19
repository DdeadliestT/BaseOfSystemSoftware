function findMin() {
	const a = parseFloat(document.getElementById("numA").value);
	const b = parseFloat(document.getElementById("numB").value);
	const resultElement = document.getElementById("result");
  
	if (isNaN(a) || isNaN(b)) {
	  resultElement.textContent = "Введите оба числа.";
	  resultElement.style.color = "#ff6666";
	  return;
	}
  
	const min = Math.min(a, b);
	resultElement.textContent = `Минимум: ${min}`;
	resultElement.style.color = "#00ffff";
}