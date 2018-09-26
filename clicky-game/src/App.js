import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import cards from "./cards.json";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header>Clicky Game</Header>
        </header>
        
        <Card></Card>
      </div>
    );
  }
}

export default App;
