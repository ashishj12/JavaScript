// Function to fetch data from the API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to create a table from the data
function createTable(data) {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();

  // Create header row
  const headerRow = thead.insertRow();
  Object.keys(data[0]).forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });

  // Create data rows
  data.forEach(item => {
    const row = tbody.insertRow();
    Object.values(item).forEach(value => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });

  return table;
}

//fetch data and create table
async function createTableFromAPI(apiUrl) {
  const tableContainer = document.getElementById('tableContainer');
  const errorElement = document.getElementById('error');
  errorElement.style.display = 'none';

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
    errorElement.style.display = 'block';
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
createTableFromAPI(apiUrl);