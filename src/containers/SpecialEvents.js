import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { actionIcon } from "@aws-amplify/ui";

export default function SpecialEvents() {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [action, setAction] = useState("");
    const [remarks, setRemarks] = useState("");

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
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={description}
                        row={2}
                        placeholder="Write description ..."
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Action</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={action}
                        row={2}
                        placeholder="Action"
                        onChange={(e) => setAction(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="Address">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={remarks}
                        row={2}
                        placeholder="Write Remarks ..."
                        onChange={(e) => setRemarks(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-5" block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
        </Button>
            </Form>
        </div>
    );
}