/* jshint esversion: 6 */
import React, { Component } from 'react';


// Main app container
export default class BodyContainer extends Component {
  render() {
    return (
      <div>
        <div className="sectionContainer iPhone8">
          <h2>iPhone 8</h2>
          <h3>A new generation of iPhone.</h3>
          <figure></figure>
        </div>
        <div className="sectionContainer iPhoneX">
          <h2>iPhone X</h2>
          <h3>Say hello to the future</h3>
          <figure></figure>
        </div>
        <div className="sectionContainer watch">
          <h2><span>Watch</span></h2>
          <h3>Freedom calls.</h3>
          <figure></figure>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="sectionContainer promoTv">
              <h2><span>Promo TV</span></h2>
              <h3>The 4K HDR era. Now playing.</h3>
              <figure></figure>
            </div>
          </div>
          <div className="col-2">
            <div className="sectionContainer ios11">
              <h2>iOS11</h2>
              <h3>Available now.</h3>
              <figure></figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="sectionContainer watchOS">
              <h2><span>watchOS 4</span></h2>
              <h3>Available now.</h3>
              <figure></figure>
            </div>
          </div>
          <div className="col-2">
            <div className="sectionContainer lastChance">
              <h2>Last Chance</h2>
              <h3>Buy Mac for college. Get Beats.</h3>
              <figure></figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
