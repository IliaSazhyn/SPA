/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Container, Row, Col, Nav } from 'react-bootstrap';
export default class Header extends Component {
  render() {
   
    return (
      <React.Fragment>
          <div id="home" className='header'>

          <Row className="justify-content-md-center header-nav">
    <Col xs lg="2">
    <img src={logo} alt={"logo"}/> 
    </Col>
    <Col md="auto" lg="8"> 
    <Nav className="justify-content-center" activeKey="/home">
   
    <Nav.Item>
      <Nav.Link href="/home">home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">experience</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">our team</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-4">pricing</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-5">portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-6">shop</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-7">contact us</Nav.Link>
    </Nav.Item>
   
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
      </React.Fragment>
    );
  }
}