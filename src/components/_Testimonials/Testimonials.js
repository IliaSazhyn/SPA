import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faPhone, faSkullCrossbones, faDesktop } from "@fortawesome/free-solid-svg-icons";
import style from "./Testimonials.module.scss";

export default class Testimonials extends Component {
    render() {
        return (
            <div className={style.discovery}>
                <Container>
                    <Row>
                        <Col lg md="6">
                            <FontAwesomeIcon icon={faFlask} className={style.discovery_icon__flask} />
                            <h1 className={style.discovery_header__flask}>new discovery</h1>
                            <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis,
                sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien
                ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis.
           Suspendisse consectetur fringilla suctus.</div>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPhone} className={style.discovery_icon__phone} />
                            <h1 className={style.discovery_header__phone}>new discovery</h1>
                            <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis,
                sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien
                ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis.
           Suspendisse consectetur fringilla suctus.</div></Col>
                    </Row>
                    <Row>
                        <Col lg md="6">
                            <FontAwesomeIcon icon={faSkullCrossbones} className={style.discovery_icon__skull} />
                            <h1 className={style.discovery_header__skull}>Technology</h1>
                            <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis,
                sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien
                ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis.
           Suspendisse consectetur fringilla suctus.</div></Col>
                        <Col>
                            <FontAwesomeIcon icon={faDesktop} className={style.discovery_icon__desktop} />
                            <h1 className={style.discovery_header__desktop}>Fully Responsive</h1>
                            <div className="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis,
                sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien
                ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis.
           Suspendisse consectetur fringilla suctus.</div></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

