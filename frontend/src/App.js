import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Table} from 'reactstrap'

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
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header> */}
          <Table dark>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Email</td>
              </tr>
                {clients.map(client => 
              <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
    );
  }
}
export default App;
