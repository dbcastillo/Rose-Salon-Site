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
        <h4 className='center' id='RoseSomething'>Rose Pudzis</h4>
        <a
          href="https://www.yelp.com/biz_photos/rowi-salon-chicago?select=zKP3-_9WBefPePMkKRtzgw"
          target="_blank"
          className="waves-effect waves-light btn white"
          id="book-button">
          Click here to book
        </a>
      </div>
  );
  }
}

export default App;
