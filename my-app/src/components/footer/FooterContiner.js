/* jshint esversion: 6 */
import React, { Component } from 'react';
import $ from 'jquery'

// Main app container
export default class FooterContiner extends Component {
  componentDidMount() {
    $(".footerContainer h4").click(function(){
      $(this).parent(".nav").toggleClass("open");
      $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 0 );
    });
  }
  render() {
    return (
      <footer className="footerContainer">
        <div>
          <div className="col-5">
            <div className="nav footerList">
              <h4>Shop and Learn</h4>
              <ul>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">iTunes</a></li>
                <li><a href="#">HomePad</a></li>
                <li><a href="#">iTouch</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="nav footerList">
              <h4>Apple Store</h4>
              <ul>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
                <li><a href="#">Clearance</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Reuse</a></li>
                <li><a href="#">Other Status</a></li>
                <li><a href="#">Shopping</a></li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="nav footerList">
              <h4>For Education</h4>
              <ul>
                <li><a href="#">Apple and Edu</a></li>
                <li><a href="#">Shop For College</a></li>
              </ul>
            </div>
            <div className="nav footerList">
              <h4>For Business</h4>
              <ul>
                <li><a href="#">Apple and Business</a></li>
                <li><a href="#">Shop For Businesss</a></li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="nav footerList">
              <h4>Account</h4>
              <ul>
                <li><a href="#">Manage You Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCLoud.com</a></li>
              </ul>
            </div>
            <div className="nav footerList">
              <h4>Apple Values</h4>
              <ul>
                <li><a href="#">Accessiblity</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Enviroment</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="nav footerList">
              <h4>About Apple</h4>
              <ul>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Apple Leadership</a></li>
                <li><a href="#">Job Opportunties</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
