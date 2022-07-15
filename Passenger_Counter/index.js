let countEL = document.getElementById('count-el')
let saveEL = document.getElementById('save-el')

let count = 0;

function increment() {
  count += 1
  countEL.textContent = count
}

function save() {
  let savedNumbers = count + ' - '
  saveEL.textContent += savedNumbers
  count = 0
  countEL.textContent = 0
}
