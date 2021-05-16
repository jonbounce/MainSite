import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function TestimonyInformation() {
    const [testifier, setTestifier] = useState("");
    const [testimony, setTestimony] = useState("");

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
                    <Form.Label>Name of testifier</Form.Label>
                    <Form.Control
                        type="text"
                        value={testifier}
                        row={2}
                        placeholder="Testifier"
                        onChange={(e) => setTestifier(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Testimony</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={testimony}
                        row={2}
                        placeholder="Enter testimony here ..."
                        onChange={(e) => setTestimony(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-5" block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
        </Button>
            </Form>
        </div>
    );
}