function addData() {
  const input = document.getElementById('dataInput').value;
  if (input) {
      const existingData = JSON.parse(localStorage.getItem('crudData')) || [];
      existingData.push({ id: existingData.length + 1, value: input });
      localStorage.setItem('crudData', JSON.stringify(existingData));
      alert('Registro agregado');
  } else {
      alert('Por favor introduce un dato');
  }
}

function showAllData() {
  const data = JSON.parse(localStorage.getItem('crudData')) || [];
  const display = document.getElementById('allDataDisplay');
  display.innerHTML = data.map(item => `ID: ${item.id}, Dato: ${item.value}`).join('<br>');
}

function updateData() {
  const idInput = document.getElementById('updateIdInput').value;
  const dataInput = document.getElementById('updateDataInput').value;
  const id = parseInt(idInput, 10);
  const data = JSON.parse(localStorage.getItem('crudData')) || [];
  const index = data.findIndex(item => item.id === id);

  if (index !== -1 && dataInput) {
      data[index].value = dataInput;
      localStorage.setItem('crudData', JSON.stringify(data));
      alert('Registro actualizado');
  } else {
      alert('ID no válido o campo de dato vacío');
  }
}

function deleteData() {
  const idInput = document.getElementById('deleteIdInput').value;
  const id = parseInt(idInput, 10);
  const data = JSON.parse(localStorage.getItem('crudData')) || [];
  const filteredData = data.filter(item => item.id !== id);

  if (data.length !== filteredData.length) {
      localStorage.setItem('crudData', JSON.stringify(filteredData));
      alert('Registro eliminado');
  } else {
      alert('ID no válido');
  }
}

function showSingleData() {
  const idInput = document.getElementById('singleIdInput').value;
  const id = parseInt(idInput, 10);
  const data = JSON.parse(localStorage.getItem('crudData')) || [];
  const item = data.find(item => item.id === id);
  
  const display = document.getElementById('singleDataDisplay');
  if (item) {
      display.innerHTML = `ID: ${item.id}, Dato: ${item.value}`;
  } else {
      display.innerHTML = 'Registro no encontrado';
  }
}
