/* jshint esversion: 6 */
import React, { Component } from 'react';

// Main app container
export default class DropdownMenu extends Component {
  render() {
    return (
      <aside id="dropdownMenu" className="dropdownHidden">
        <div>
          <p>You Bag is Empty.</p>
        </div>
        <nav>
          <ul>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Bag</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}
