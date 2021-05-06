import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Visitor() {
    const [email, setEmail] = useState("");
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
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const updateAge = (value) => {
        if ((Number(value) >= 0 && Number(value) < 200) || value === '') {
            setAge(value)
        }
    }

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
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="phonenumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" value={PhoneNumber} placeholder="(xxx) xxx-xxxx" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="" disabled>Choose...</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" value={age} placeholder="Age" onChange={(e) => updateAge(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="invitiation">
                            <Form.Label>Who invited you</Form.Label>
                            <Form.Control type="text" value={invitedPerson} placeholder="Enter the person name" onChange={(e) => setInvitedPerson(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="worker">
                            <Form.Label>Date you visited </Form.Label>
                            <Form.Control type="date" value={visitedDate} placeholder="Enter the visited date" onChange={(e) => setVisitedDate(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Address">
                        <Form.Label>Enter your Church Address</Form.Label>
                        <Form.Control value={ChurchAddress} placeholder="1234 Main St" onChange={(e) => setChurchAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="Address">
                        <Form.Label>Enter prayer request</Form.Label>
                        <Form.Control value={prayerRequest} placeholder="Prayer request" onChange={(e) => setPrayerRequest(e.target.value)} />
                    </Form.Group>

                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Submit
                    </Button>

                </Form>
            </Form>
        </div>
    );
}