/* jshint esversion: 6 */
import React, { Component } from 'react';

// Main app container
export default class SearchInput extends Component {
  render() {
    let myFunction2 = function() {
    document.getElementById("searchInput").classList.toggle("searchHidden");
    document.getElementById('navContainer').classList.toggle("bgColor");
    }
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
        <button onClick={myFunction2} id="searchCloseBTN">
          <span className="closeContainer">
            <span className="closeLeft"></span>
            <span className="closeRight"></span>
          </span>
        </button>
      </aside>
    );
  }
}
