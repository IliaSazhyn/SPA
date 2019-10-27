import React from "react";
import { Nav } from "react-bootstrap";

class HeaderNav extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          link: "#Home",
          color: "#60cae8",
          name: "home"
        },
        {
          link: "#Services",
          color: "#bed431",
          name: "services"
        },
        {
          link: "#Experience",
          color: "#e21e25",
          name: "experience"
        },
        {
          link: "#Our team",
          color: "#f6c815",
          name: "our team"
        },
        {
          link: "#Pricing",
          color: "#c6c6c6",
          name: "pricing"
        },
        {
          link: "#Portfolio",
          color: "#7251a2",
          name: "portfolio"
        },
        {
          link: "#Shop",
          color: "#f11aa8",
          name: "shop"
        },
        {
          link: "#Contact_us",
          color: "#fe4419",
          name: "contact us"
        }
      ]
    };
  }
  render() {
    return (
      <Nav className="justify-content-center" activeKey="/home">
        {this.state.data.map((person, i) => (
          <HeaderRow key={i} data={person} />
        ))}
      </Nav>
    );
  }
}
class HeaderRow extends React.Component {
  render() {
    return (
      <Nav.Item>
        <Nav.Link href={this.props.data.link}>
          <font color={this.props.data.color}>{this.props.data.name}</font>
        </Nav.Link>
      </Nav.Item>
    );
  }
}
export default HeaderNav;
