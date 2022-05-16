export function deleteUser(){
    // const name = document.getElementById('formNameFieldDelete').value;
    // const email = document.getElementById('formEmailFieldDelete').value;
    const id = document.getElementById('formIdFieldDelete').value;
    
    const data = {
      name: "",
      email: ""
    }
    
    fetch( 'http://localhost:8080/users/' + id, {
        method: 'DELETE', 
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

