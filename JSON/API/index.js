// Function to fetch data from the API
function fetchData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

// Function to create a table from the data
function createTable(data) {
  const table = document.createElement('table');
  // Create header row
  const headerRow = table.insertRow();
  Object.keys(data[0]).forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  // Create data rows
  data.forEach(user => {
    const row = table.insertRow();
    Object.entries(user).forEach(([key, value]) => {
      const cell = row.insertCell();
      let geoFind = []
      if (typeof value === 'object') {
        for (let k in value) {
          if (k != 'geo') {
            geoFind.push(value[k])
          }
        }
        cell.textContent = geoFind.join(', ')
      } else {
        cell.textContent = value;
      }
    });
  });
  return table;
}

// Fetch data and create table
function createTableFromAPI(apiUrl) {
  const tableContainer = document.getElementById('tableContainer');
  const errorElement = document.getElementById('error');
  errorElement.textContent = '';

  fetchData(apiUrl)
    .then(data => {
      if (data && data.length > 0) {
        const table = createTable(data);
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
      } else {
        throw new Error('No data received from API');
      }
    })
    .catch(error => {
      errorElement.textContent = `Error: ${error.message}`;
    });
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
createTableFromAPI(apiUrl);