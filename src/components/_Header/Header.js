import React, { Component } from "react";
import logo from "../../images/logo.png";
import { Container, Row, Col, Nav } from "react-bootstrap";
import HeaderNav from "./HeaderNav";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import style from "./Header.module.scss";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Home" className={style.header}>
          <div className="justify-content-md-center">
            <Row className={style.nav}>
              <Col xs lg="2">
                <img src={logo} alt={"logo"} />
              </Col>
              <Col md="auto" lg="8" className={style.hide}>
                <Nav className="justify-content-center" activeKey="/home">
                  <HeaderNav />
                </Nav>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md="12" className="justify-content-center lotto ">
              <h1 className="font_primary">We Love Colors</h1>
              <h2 className="font_secondary">
                Parallax and Responsive Template
              </h2>
            </Col>
          </Row>
          <Container></Container>
        </div>
        <div>
          <ScrollUpButton />
        </div>
      </React.Fragment>
    );
  }
}
export default Header; 