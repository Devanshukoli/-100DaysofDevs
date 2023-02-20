let total = 0

document.querySelector('#zero').addEventListener('click', reset)
document.querySelector('#sub5').addEventListener('click', minFive)
document.querySelector('#mul8').addEventListener('click', multiEight)
document.querySelector('#div2').addEventListener('click', divisionByTwo)
document.querySelector('#add45').addEventListener('click', againAdditionOf45)

function reset() {
  total =  0
  document.querySelector('#result').innerHTML = total
}

function minFive() {
  total = total - 5
  document.querySelector('#result').innerHTML = total 
}

function multiEight() {
  total = total * 8
  document.querySelector('#result').innerHTML = total
}

function divisionByTwo() {
  total = total / 2
  document.querySelector('#result').innerHTML = total
}

function againAdditionOf45() {
  total = total + 45
  document.querySelector('#result').innerHTML = total
}