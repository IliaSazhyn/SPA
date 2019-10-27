import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import style from "./ContactUs.module.scss";
export class ContactUs extends Component {
  render() {
    return (
      <section className={style.contact_us} id="Contact_us">
        <Container>
          <Row>
            <Col md="12" className="justify-content-center vh">
              <div className="heading-main heading-main--red">contact us</div>
              <div className="heading-second">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque
                ultricies vestibulum.
              </div>
              <Form>
                <Row className={style.form_label}>
                  <Col>
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" />
                  </Col>
                </Row>
                <Row className={style.form_label}>
                  <Col>
                    <Form.Label>Company:</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>Website:</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>
                <Col md="12" className={style.form_label}>
                  <Form.Group controlId="exampleForm.ControlTextarea1" md="12">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" className="textarea" />
                  </Form.Group>
                </Col>
                <Button variant="primary" type="submit" className="red submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default ContactUs;
