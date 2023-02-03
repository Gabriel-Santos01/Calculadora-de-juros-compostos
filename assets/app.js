document.getElementById('calculate').addEventListener('click', function () {
  const value = document.getElementById('value').value
  const tax = document.getElementById('tax').value / 100
  const duration = document.getElementById('duration').value

  const total = value * (1 + tax) ** duration

  document.getElementById('total').innerHTML =
    'R$ ' + total.toFixed(2).replace('.', ',')
})
