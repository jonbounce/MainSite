import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Checkin.css";
import StateManager from "react-select";

export default function Checkin() {
  const [email, setEmail] = useState("");
  const [ChurchAddress, setChurchAddress] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [men, setMen] = useState("");
  const [women, setWomen] = useState("");
  const [youths, setYouths] = useState("");
  const [kids, setKids] = useState("");

  const [pastor, setPastor] = useState("");
  const [feedback, setFeedback] = useState("");

  function validateForm() {
    return email.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // const updateAge = (value) => {
  //   if ((Number(value) >= 0 && Number(value) < 200) || value === '') {
  //     setAge(value)
  //   }
  // }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form>

          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"
                name="firstName"
                value={FirstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="phonenumber">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"
                name="firstName"
                value={LastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="pastor">
              <Form.Label>Enter pastor's name</Form.Label>
              <Form.Control type="text" value={pastor} placeholder="Pastor's name" onChange={(e) => setPastor(e.target.value)} />
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="Address">
            <Form.Label>Enter your Church Address</Form.Label>
            <Form.Control value={ChurchAddress} placeholder="1234 Main St" onChange={(e) => setChurchAddress(e.target.value)} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Men</Form.Label>
              <Form.Control type="text"
                name="men"
                value={men} placeholder="Men" onChange={(e) => setMen(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="phonenumber">
              <Form.Label>Women</Form.Label>
              <Form.Control type="text"
                name="firstName"
                value={women} placeholder="Women" onChange={(e) => setWomen(e.target.value)} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Youths</Form.Label>
              <Form.Control type="text"
                name="firstName"
                value={youths} placeholder="Youths" onChange={(e) => setYouths(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="phonenumber">
              <Form.Label>Kids</Form.Label>
              <Form.Control type="text"
                name="firstName"
                value={kids} placeholder="Kids" onChange={(e) => setKids(e.target.value)} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="Address">
            <Form.Label>Feedback Note (optional) </Form.Label>
            <Form.Control value={feedback} placeholder="Write Feedback Note " onChange={(e) => setFeedback(e.target.value)} />
          </Form.Group>

          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Submit
        </Button>

        </Form>
      </Form>
    </div>
  );
}