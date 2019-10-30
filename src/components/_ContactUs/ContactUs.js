import React, { Component } from "react";
import FormContainer from "./FormContainer";
import { Container, Row, Col, } from "react-bootstrap";
import style from "./ContactUs.module.scss";
export class ContactUs extends Component {
    render() {
        return (
            <div className={style.contact_us}>
                <Container  id="Contact_us">
                    <Row>
                        <Col md="12" className="justify-content-center vh">
                            <div className="heading-main heading-main--red">contact us</div>
                            <div className="heading-second">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
                ultricies vestibulum.
                            </div>
                            <FormContainer/>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default ContactUs;
