import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SpecialRequest() {
    const [request, setRequest] = useState("");

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
                    <Form.Label>Special Request</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={request}
                        row={2}
                        placeholder="Enter your request here ..."
                        onChange={(e) => setRequest(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-5" block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
        </Button>
            </Form>
        </div>
    );
}