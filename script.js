function showAlert() {
  const date = document.getElementById('date').value;
  if (date) {
    alert('Panchang for ' + date + ' will be shown here (coming soon).');
  } else {
    alert('Please select a date first.');
  }
}
