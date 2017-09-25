/* jshint esversion: 6 */
import React, { Component } from 'react';
import Logo from './Logo.js';
import Search from './Search.js';
import Dropdown from './Dropdown.js';
import DropdownMenu from './DropdownMenu.js';
import MobileDropdownMenu from './MobileDropdownMenu.js';
import SearchInput from './SearchInput.js';


// Main app container
export default class NavContainer extends Component {
  render() {
    let myFunction = function() {
    document.getElementById("mobileDropdownMenu").classList.toggle("mobileDropdownMenu-hidden");
    document.getElementById("mobileDropdown").classList.toggle("trans");
    document.getElementById('navContainer').classList.toggle("bgColor");
    }
    return (
      <nav id="navContainer">
        <div>
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
            <li><button id="mobileDropdown" onClick={myFunction} className="">
              <span className="top"></span>
              <span className="bottom"></span>
            </button></li>
            <li><Logo /></li>
            <li><Dropdown /></li>
          </ul>
          <MobileDropdownMenu />
          <DropdownMenu />
          <SearchInput />
        </div>
      </nav>
    );
  }
}
