let num1 = 8
let num2 = 2
let output = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
  let sum = num1 + num2
  output.textContent = "Sum: " + sum
}

function subtract() {
  let diff = num1 - num2
  output.textContent = "Difference: " + diff
}

function divide() {
  let quot = num1 / num2
  output.textContent = "Quotient: " + quot
}

function multiply() {
  let prod = num1 * num2
  output.textContent = "Product: " + prod
}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
