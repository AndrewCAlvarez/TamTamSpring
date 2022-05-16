// This is used to populate the users table
export function getAllUsers() {
    fetch('http://localhost:8080/users')
.then(response => response.json())
.then(data => {
   const dataBody = document.getElementById('dataBody');
    for (let i = 0; i < data.length; i++) {        
        let table = document.getElementById('userTable');
        let tableRow = document.createElement('tr');
        let rowName = document.createElement('td');
        let rowEmail = document.createElement('td');
        rowName.textContent = data[i].name;
        rowEmail.textContent = data[i].email;

        tableRow.appendChild(rowName);
        tableRow.appendChild(rowEmail);
        table.appendChild(tableRow);
    }
})
}

