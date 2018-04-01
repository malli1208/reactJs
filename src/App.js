import React, { Component } from 'react';
import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Here is your code
        </p>
        <p>
          <UserForm />
        </p>
      </div>
    );
  }
}

export default App;
