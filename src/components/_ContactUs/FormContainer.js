import React, { Component } from "react";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";
import Button from "./elements/Button";
import { Row, Col } from "react-bootstrap";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "",
                email: "",
                company: "",
                website: "",
                about: ""
            }
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    email: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    about: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                name: "",
                email: "",
                company: "",
                website: "",
                about: ""
            }
        });
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Row className={style.form_label}>
                    <Col>
                        <Input
                            inputType={"text"}
                            title={"Full Name"}
                            name={"name"}
                            value={this.state.newUser.name}
                            placeholder={"Enter your name"}
                            handleChange={this.handleInput}
                        />{" "}
                    </Col>
                    <Col>
                        <Input
                            inputType={"email"}
                            title={"Email Address"}
                            name={"email"}
                            value={this.state.newUser.email}
                            placeholder={"Enter your email"}
                            handleChange={this.handleInput}
                        />{" "}
                    </Col>
                </Row>
                <Row className={style.form_label}>
                    <Col>
                        <Input
                            inputType={"company"}
                            title={"company"}
                            name={"company"}
                            value={this.state.newUser.company}
                            placeholder={"Company Name"}
                            handleChange={this.handleInput}
                        />{" "}
                    </Col>
                    <Col>
                        <Input
                            inputType={"Website"}
                            title={"Website"}
                            name={"Website"}
                            value={this.state.newUser.Website}
                            placeholder={"Enter Website"}
                            handleChange={this.handleInput}
                        />{" "}
                    </Col>
                </Row>
                <Row className={style.form_label}>
                    <Col>
                        <TextArea
                            title={"Example Textarea"}
                            rows={3}
                            value={this.state.newUser.about}
                            name={"currentPetInfo"}
                            handleChange={this.handleTextArea}
                            placeholder={"Describe yourself"}
                        />
                    </Col>
                </Row>
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                />{" "}
                <Button
                    action={this.handleClearForm}
                    type={"primary"}
                    title={"Clear"}
                    style={buttonStyle}
                />{" "}
            </form>
        );
    }
}

const buttonStyle = {
    padding: "10px 15px 10px 15px",
    margin: "5px"
};

export default FormContainer;
