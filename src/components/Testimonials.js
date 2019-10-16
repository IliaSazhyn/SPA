import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div>
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">

                </ul>
              </div> 
            </div> 
          </div> 
        </div>  
      </section>
        );
  }
}