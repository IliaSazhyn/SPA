import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Device from '../images/devices-dark.png';


export default class Experience extends Component {
  render() {
 
    return (
       <section className="experience" id="Experience">
     <Container>
        <Row>
           <Col md="12" className="justify-content-center vh">
              <div className="heading-main">
                 experience
                 </div>
              <div className="heading-second">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque ultricies vestibulum.
                 </div>
              <div className="text-main">
                 Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quis lacinia faucibus,
               orci ipsum gravida tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, 
               sem quis lacinia faucibus, orci ipsum gravida tortor. Nulla varius consequat magna,
                id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis
                 ut venenatis eu, sodales vel dolor quis lacinia faucibus, orci ipsum gravida tortor.
                 </div>
               
                    <Col className="justify-content-center experience-img"><img src={Device} alt={"device"}/></Col>
                   
                    
           </Col>
        </Row>
     </Container>
     </section>
    );
  }
}