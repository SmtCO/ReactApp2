import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import CounterContainer from './CounterContainer';
import PersonListContainer from './PersonListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CounterContainer></CounterContainer>
        <PersonListContainer></PersonListContainer>
      </div>
    );
  }
}

export default App;
