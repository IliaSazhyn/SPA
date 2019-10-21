/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Container, Row, Col, Nav} from 'react-bootstrap';
import HeaderNav from './HeaderNav';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; 
export default class Header extends Component {
  render() {
   
    return (
      <React.Fragment>
          <div id="Home" className='header'>

          <Row className="justify-content-md-center header-nav">
    <Col xs lg="2">
    <img src={logo} alt={"logo"}/> 
    </Col>
    <Col md="auto" lg="8" className="hide"> 
    <Nav className="justify-content-center" activeKey="/home">
    <HeaderNav/>
    </Nav>
    
  </Col>
 
  </Row>
  <Row>
    <Col md="12" className="justify-content-center lotto "><h1>We Love Colors</h1>
    <h2>Parallax and Responsive Template</h2></Col>
  </Row>
      <Container>
   
  

  <Row className="justify-content-md-center"></Row>
  <Row className="justify-content-md-center"></Row>

</Container>
</div>
<div>
        <ScrollUpButton />
      </div>
      </React.Fragment>
    );
  }
}