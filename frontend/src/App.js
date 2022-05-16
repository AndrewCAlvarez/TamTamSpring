import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/users');
    const body = await response.json();
    this.setState({clients: body});
  }

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {clients.map(client =>
                  <div key={client.id}>
                    {client.name} ({client.email})
                  </div>
              )}
            </div>
            <h1>Styling branch take 3</h1>
          </header>
        </div>
    );
  }
}
export default App;
