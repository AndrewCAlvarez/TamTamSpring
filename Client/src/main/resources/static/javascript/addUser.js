export function addUser(){
    const name = document.getElementById('formNameField').value;
    const email = document.getElementById('formEmailField').value;
    
    const data = {
      name: name,
      email: email
    }
    
    fetch( 'http://localhost:8080/users', {
        method: 'POST', // or 'PUT'
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

