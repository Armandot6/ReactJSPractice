/* jshint esversion: 6 */
import React, { Component } from 'react';

// Main app container
export default class Dropdown extends Component {
  render() {
    let myFunction = function() {
    document.getElementById("dropdownMenu").classList.toggle("dropdownHidden");
    }
    return (
      <a onClick={myFunction} href="#">
        <img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/bag/image_large.svg" />
      </a>
    );
  }
}
