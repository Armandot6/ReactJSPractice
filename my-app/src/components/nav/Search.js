/* jshint esversion: 6 */
import React, { Component } from 'react';

 const Search = () => {
   let myFunction2 = function() {
   document.getElementById("searchInput").classList.toggle("searchHidden");
   document.getElementById('navContainer').classList.toggle("bgColor");
   }
    return (
      <a onClick={myFunction2} href="#">
        <img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/search/image_large.svg" />
      </a>
    );
}

export default Search;
