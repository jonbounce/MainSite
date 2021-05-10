import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function ChallengesEncounter() {
    const [details, setDetails] = useState("");
    const [actionTaken, setActionTaken] = useState("");
    const [furtherAction, setFurtherAction] = useState("");

    function validateForm() {
        return true
        // return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}
            >
                <Form.Group controlId="Address">
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={details}
                        row={2}
                        placeholder="Write details ..."
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Action Taken</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={actionTaken}
                        row={2}
                        placeholder="Action Taken"
                        onChange={(e) => setActionTaken(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Recommended Further Action</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={furtherAction}
                        row={2}
                        placeholder="Recommended Further Action"
                        onChange={(e) => setFurtherAction(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-5" block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
        </Button>
            </Form>
        </div>
    );
}