/* jshint esversion: 6 */
import React, { Component } from 'react';

// Main app container
export default class SearchInput extends Component {
  render() {
    return (
      <aside id="searchInput" className="searchHidden">
        <div className="searchContainer">
          <form>
            <div className="searchInputContainer">
              <button></button>
              <input placeholder="Search Apple.com" />
            </div>
          </form>
        </div>
        <button id="searchCloseBTN">
          <span className="closeContainer">
            <span className="closeLeft"></span>
            <span className="closeRight"></span>
          </span>
        </button>
      </aside>
    );
  }
}
