import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SimpleMap from "./map";
import style from "./Footer.module.scss";

export class Footer extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header
            className={`${style.card_header} ${style.p - 0} ${style.red}`}
          >
            <h2 className={style.header}>new discovery</h2>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className={style.icon_block}
            >
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${style.icon} ${style.icon_arrow}`}
              />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <SimpleMap />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
export default Footer;
