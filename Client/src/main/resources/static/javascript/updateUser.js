export function updateUser(){
    const name = document.getElementById('formNameFieldUpdate').value;
    const email = document.getElementById('formEmailFieldUpdate').value;
    const id = document.getElementById('formIdFieldUpdate').value;
    
    const data = {
      name: name,
      email: email
    }

    console.log("Attempting to add user...");
    console.log(`${name}  ${email}`)

    
    fetch( 'http://localhost:8080/users/' + id, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then( response => response.json())
        .then( data => {
            console.log(data);
        });
}

