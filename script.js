document.getElementById('getDataBtn').addEventListener('click', function() {
  fetch('http://localhost:6003/api') // Assuming your server endpoint is '/api/data'
    .then(response => response.json())
    .then(data => {
      // Display the received JSON data in the div
      console.log(data)
      document.getElementById('jsonDataContainer').innerText = 'hello there' 
      //document.getElementById('jsonDataContainer').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error fetching data:', error));
});

