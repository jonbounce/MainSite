import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Checkin.css";

export default function Checkin() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState('');
//  const [password, setPassword] = useState("");
const FormComponent = () => {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

 }


  function validateForm() {
    return Number.length > 0 && Name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Checkin">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="Household Name">
          <Form.Label>Household Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="No. in Household">
          <Form.Label>Number of people in Household</Form.Label>
          <Form.Control
            type="count" min="0" max="100"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
          </Form.Group>
       <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Prayer Points</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}