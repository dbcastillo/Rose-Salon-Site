import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="SalonContainer">
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#contact">About</a>
          <a href="#news">Services</a>
          <a href="#about">Contacts</a>
          <a href="#about">Portfolio</a>
        </div>
      </div>
  );
  }
}

export default App;
