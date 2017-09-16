/* jshint esversion: 6 */
import React, { Component } from 'react';
import Logo from './Logo.js';

// Main Nav Container
export default class NavContainer extends Component {
  render() {
    return (
      <nav>
        <nav>
          <ul className="nav navbar-nav">
            <li><Logo /></li>
            <li>link</li>
            <li>link</li>
            <li>search</li>
            <li>dropdown</li>
          </ul>
        </nav>
      </nav>
    );
  }
}
