function calculate() {
  try {
    let value1 = parseInt(
      validate(document.getElementById("num1").value.trim())
    );
    let value2 = parseInt(
      validate(document.getElementById("num2").value.trim())
    );
    let operator = document.getElementById("operator").value;
    document.getElementById("result").value = operate(value1, value2, operator);
  } catch (err) {
    alert("There was a problem: " + err.messaqge);
  }
}

function operate(value1, value2, operator) {
  if (operator == "addition") {
    return value1 + value2;
  } else if (operator == "subtraction") {
    return value1 - value2;
  } else if (operator == "division") {
    return value1 / value2;
  } else if (operator == "multiplication") {
    return value1 * value2;
  }
}

function validate(value) {
  if (value == null || value == "") {
    alert("Введите нужные данные");
    return 0;
  } else if (isNaN(value)) {
    alert("Значение должно быть числом");
    return 0;
  } else return value;
}

function reset() {
  document.getElementById("num1").value = null;
  document.getElementById("num2").value = null;
  document.getElementById("result").value = null;
}
