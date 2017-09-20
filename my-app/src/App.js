/* jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';
import NavContainer from './components/nav/NavContainer.js';
import BodyContainer from './components/body/BodyContainer.js';
import FooterContiner from './components/footer/FooterContiner.js';


// Main app container
class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavContainer />
        <BodyContainer />
        <FooterContiner />
      </div>
    );
  }
}

export default App;
