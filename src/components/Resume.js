import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">

         <div className="education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">

            </div>
         </div>
        <div className="work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
 
            </div> 
         </div>


         <div className="skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

              

   				<div className="bars">



   				</div>

   			</div>

         </div>

      </section>
    );
  }
}