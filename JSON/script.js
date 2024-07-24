var employeeJson = [
    {
        "name": "Google",
        "employees": 1000,
        "ceo": "Sundar Pichai",
        "rating": 5
    },
    {
        "name": "Amazon",
        "employees": 1000,
        "ceo": "Jeff Bezos",
        "rating": 4.4
    },
    {
        "name": "Microsoft",
        "employees": 1000,
        "ceo": "Satya Nadella",
        "rating": "4.5"
    }
];

function createTableFromJsonData() {
    // Get the table element
    var table = document.getElementById("json-data");

    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    // Get the headers from JSON data
    var headers = Object.keys(employeeJson[0]);

    // Create header cells
    headers.forEach(function (header) {
        var th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement("tbody");

    // Create rows for each employee
    employeeJson.forEach(function (employee) {
        var row = document.createElement("tr");
        // Create cells for each property
        headers.forEach(function (header) {
            var cell = document.createElement("td");
            cell.textContent = employee[header];
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

// Call the function when the window loads
window.onload = createTableFromJsonData;