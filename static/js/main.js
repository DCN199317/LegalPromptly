fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(err => {
    document.getElementById('message').textContent = 'Error loading data';
    console.error(err);
  });
