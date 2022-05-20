import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import styled from 'styled-components';
import Table from './Components/Table';

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
    
    const Test = styled.h1`
      background: #343634;
      color: white;
    `;

    if(clients.length == 0){
      // Do nothing
    } else {
      return (
        <div className="App">
        <Test>Test h1</Test>
        <Table clients={clients}></Table>
        </div>
    );
    }

  }
}
export default App;
