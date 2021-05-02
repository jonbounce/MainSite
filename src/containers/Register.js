import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Register.css";


export default function Register() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [Confirmpassword, setConfirmpassword] = useState("");
const [ChurchAddress, setChurchAddress] = useState("");

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [PhoneNumber, setPhoneNumber] = useState("");
const [City, setCity] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form>

  <Row>
    <Col>
    <Form.Label>First Name</Form.Label>
      <Form.Control type="text"
                name="firstName"
                value={FirstName} placeholder="First name"  onChange={(e)=> setFirstName(e.target.value)} />
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control type="text"
                name="firstName"
                value={LastName} placeholder="Last name" onChange={(e)=> setLastName(e.target.value)} />
    </Col>
  </Row>

  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="phonenumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" value={PhoneNumber}  placeholder="(xxx) xxx-xxxx" onChange={(e)=> setPhoneNumber(e.target.value)} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="Address">
    <Form.Label>Enter your Church Address</Form.Label>
    <Form.Control value={ChurchAddress} placeholder="1234 Main St" onChange={(e)=> setChurchAddress(e.target.value)}/>
  </Form.Group>
 <Form.Row>
    <Form.Group as={Col} controlId="City">
      <Form.Label>City</Form.Label>
     <Form.Control value={City}  onChange={(e)=> setCity(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col} controlId="State">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Texas</option>
        <option>Oklahoma</option>
         <option>Arizona</option>
          <option>New Mexico</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="Zip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>




<Form.Row>
        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>


          <Form.Group as={Col} controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={Confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </Form.Group>

</Form.Row>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>

</Form>
      </Form>
    </div>
  );
}