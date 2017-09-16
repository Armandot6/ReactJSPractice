/* jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';
import NavContainer from './components/nav/NavContainer.js';


// Main app container
class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavContainer />
      </div>
    );
  }
}

export default App;
