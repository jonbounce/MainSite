import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Visitor() {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ChurchAddress, setChurchAddress] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [invitedPerson, setInvitedPerson] = useState("");
  const [visitedDate, setVisitedDate] = useState(new Date());

  const [prayerRequest, setPrayerRequest] = useState("");

  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const UserData = {
      FirstName: FirstName,
      LastName: LastName,
      ChurchAddress: ChurchAddress,
      age: age,
      email: email,
      confirmEmail: ConfirmEmail,
      PhoneNumber: PhoneNumber,
      invitation: invitedPerson,
      visitedDate: visitedDate,
      prayerRequest: prayerRequest,
    };
    console.log(UserData);
    History.push("/");
  }

  const updateAge = (value) => {
    if ((Number(value) >= 0 && Number(value) < 200) || value === "") {
      setAge(value);
    }
  };

  return (
    <div className="Login">
      <Form>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={FirstName}
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={LastName}
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="location">
              <Form.Label>Church Location</Form.Label>
              <Form.Control
                value={ChurchAddress}
                onChange={(e) => setChurchAddress(e.target.value)}
                as="select"
                defaultValue="Choose...">
                <option value="">Select</option>
                <option value="dallas">Dallas</option>
                <option value="Spring">Spring</option>
                <option value="Houston">Houston</option>
                <option value="Austin">Austin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="confirm-email">
              <Form.Label>Confirm Email Address</Form.Label>
              <Form.Control
                type="email"
                value={ConfirmEmail}
                placeholder="Enter email"
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="phonenumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={PhoneNumber}
                placeholder="(xxx) xxx-xxxx"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="invitiation">
              <Form.Label>Who invited you</Form.Label>
              <Form.Control
                type="text"
                value={invitedPerson}
                placeholder="Enter the person name"
                onChange={(e) => setInvitedPerson(e.target.value)}
              />
            </Form.Group>{" "}
            <Form.Group as={Col} controlId="worker">
              <Form.Label>Date visited</Form.Label>
              <Form.Control
                type="date"
                value={visitedDate}
                placeholder="Enter the visited date"
                onChange={(e) => setVisitedDate(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="Address" as={Col}>
              <Form.Label>Enter prayer request</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: 200 }}
                value={prayerRequest}
                row={2}
                placeholder="Prayer request"
                onChange={(e) => setPrayerRequest(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button
            block
            size="lg"
            type="submit"
            onClick={handleSubmit}
            disabled={!validateForm()}>
            Submit
          </Button>
        </Form>
      </Form>
    </div>
  );
}
