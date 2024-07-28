// Function to fetch data from the API
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
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
      if (typeof value === 'object') {
        cell.textContent = Object.values(value).join(', ');
      } else {
        cell.textContent = value;
      }
    });
  });

  return table;
}

// Fetch data and create table
async function createTableFromAPI(apiUrl) {
  const tableContainer = document.getElementById('tableContainer');
  const errorElement = document.getElementById('error');
  errorElement.textContent = '';

  try {
    const data = await fetchData(apiUrl);
    if (data && data.length > 0) {
      const table = createTable(data);
      tableContainer.innerHTML = '';
      tableContainer.appendChild(table);
    } else {
      throw new Error('No data received from API');
    }
  } catch (error) {
    errorElement.textContent = `Error: ${error.message}`;
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
createTableFromAPI(apiUrl);