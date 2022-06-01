import "./App.css";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import { Outlet, Link } from "react-router-dom";

function App() {
  // state = {
  //   clients: [],
  // };

  // async componentDidMount() {
  //   // const response = await fetch('http://localhost:8080/users');
  //   // const body = await response.json();
  //   // this.setState({clients: body});
  // }

  //   const {clients} = this.state;
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {/* {clients.map(client => 
              <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                </tr>
              )} */}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
export default App;
