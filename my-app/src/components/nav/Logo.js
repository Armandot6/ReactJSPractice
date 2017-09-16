/* jshint esversion: 6 */
import React, { Component } from 'react';
import logo from '../../images/appleLogo.svg';

// Main Nav Container
export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} />
      </div>
    );
  }
}
