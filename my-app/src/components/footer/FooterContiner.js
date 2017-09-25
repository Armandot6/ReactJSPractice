/* jshint esversion: 6 */
import React, { Component } from 'react';


// Main app container
export default class FooterContiner extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="col-5">
          <h4>Learn</h4>
          <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
