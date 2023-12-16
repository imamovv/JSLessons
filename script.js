const selectElement = document.createElement('select');
const option1 = document.createElement('option');
option1.value = 'ascending';
option1.text = 'По возрастанию';
const option2 = document.createElement('option');
option2.value = 'descending';
option2.text = 'По убыванию';
selectElement.appendChild(option1);
selectElement.appendChild(option2);
document.body.appendChild(selectElement);

selectElement.addEventListener('change', function() {
  if (this.value === 'ascending') {
    console.log('Сортировка от меньшего к большему');
  } else if (this.value === 'descending') {
    console.log('Сортировка от большего к меньшему');
  }
});