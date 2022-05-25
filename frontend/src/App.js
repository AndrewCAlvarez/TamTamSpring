import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Nav from './Components/Nav';
import { Outlet, Link} from 'react-router-dom';


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
          <header>
            <Nav></Nav>
          </header> 
          <table>
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
          </table>
          <Outlet />
        </div>
    );
  }
}
export default App;
