import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faPhone, faSkullCrossbones, faDesktop } from "@fortawesome/free-solid-svg-icons";


export default class Testimonials extends Component {
  render() {
    return (
      <section className="discovery">
        <Container>
       <Row>
         <Col lg md="6">
         
         <FontAwesomeIcon icon={faFlask} className="discovery-icon--flask"/>
         <h1 className="discovery-header--flask">new discovery</h1>
         
         <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, 
           sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien 
           ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. 
           Suspendisse consectetur fringilla suctus.</div>
         </Col>
         <Col>
         <FontAwesomeIcon icon={faPhone} className="discovery-icon--phone"/>
         <h1 className="discovery-header--phone">new discovery</h1>
         <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, 
           sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien 
           ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. 
           Suspendisse consectetur fringilla suctus.</div></Col>
       </Row>
       <Row>
         <Col lg md="6">
         <FontAwesomeIcon icon={faSkullCrossbones} className="discovery-icon--skull"/>
         <h1 className="discovery-header--skull">Technology</h1>
         <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, 
           sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien 
           ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. 
           Suspendisse consectetur fringilla suctus.</div></Col>
         <Col>
         <FontAwesomeIcon icon={faDesktop} className="discovery-icon--desktop"/>
         <h1 className="discovery-header--desktop">Fully Responsive</h1>
         <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, 
           sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien 
           ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. 
           Suspendisse consectetur fringilla suctus.</div></Col>
       </Row>
       </Container>
      </section>
        );
  }
}
