import React, { Component } from 'react';
import logo from './logo.svg';
import '../Stylesheets/App.css';
import Seats from './Seats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Movie Booking Zone</h2>
          <div>
          
           <Seats  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;