/* jshint esversion: 6 */
import React, { Component } from 'react';
import Logo from './Logo.js';
import Search from './Search.js';
import Dropdown from './Dropdown.js';


// Main app container
export default class NavContainer extends Component {
  render() {
    return (
      <nav id="navContainer">

        <ul className="desktopNav">
          <li><Logo /></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Support</a></li>
          <li><Search /></li>
          <li><Dropdown /></li>
        </ul>
        <ul className="mobileNav">
          <li><a href="#">
            --
          </a></li>
          <li><Logo /></li>
          <li><a href="#">
            <img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/bag/image_large.svg" />
          </a></li>
        </ul>
      </nav>
    );
  }
}
