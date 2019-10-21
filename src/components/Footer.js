import React, { Component } from 'react';
import { Container, Row, Col, Card, Accordion, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SimpleMap from './map';
export default class Footer extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header className="red p-0"><h2 className="footer-header">new discovery</h2>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="icon-block">
      
      <FontAwesomeIcon icon={faAngleDown} className="icon icon-arrow"/>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><SimpleMap/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

    );
  }
}


