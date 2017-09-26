/* jshint esversion: 6 */
import React, { Component } from 'react';

export default class MobileDropdownMenu extends Component {
  render() {
    return (
      <aside id="mobileDropdownMenu" className="mobileDropdownMenu-hidden">
        <nav>
          <ul>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}
