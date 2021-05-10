import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
import './PastorPortal.css';
import SubmitMonthlyAttendance from './SubmitMonthlyAttendence';
import ChallengesEncounter from "./ChallengesEncounter";
import SpecialEvents from "./SpecialEvents";
import TestimonyInformation from "./TestimonyInformation";

export default function PastorPortal() {

    const drawerChildren = [
        "Submit Monthly Attendance", "Submit Challenges Encountered",
        "Submit Special Events/Programs", "Submit Testimonal Information",
        "Special Request to RO"
    ]

    const [activeKey, setActiveKey] = useState(drawerChildren[0]);

    function validateForm() {
        return true
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const selectedPage = () => {

        switch (activeKey) {
            case drawerChildren[0]: //Submit Monthly Attendance
                return <SubmitMonthlyAttendance />
            case drawerChildren[1]: //Submit Challenges Encountered
                return <ChallengesEncounter />
            case drawerChildren[2]: //Submit Special Events/Programs
                return <SpecialEvents />
            case drawerChildren[3]: //Submit Testimonal Information
                return <TestimonyInformation />
            default:
                return <></>
        }
    }

    return (
        <div className="Login">
            <div className="row">
                <Nav defaultActiveKey="/home" className="flex-column side-drawer col-3">
                    {drawerChildren.map((value, i) =>
                        <Nav.Link
                            key={i}
                            onClick={() => setActiveKey(value)}
                            active={activeKey === value}
                            className={"side-drawer-child " +
                                (activeKey === value ? "active-child" : "")}
                        >
                            {value}
                        </Nav.Link>
                    )}
                </Nav>
                <div className="col-9">
                    <div className="mb-3 pastor-header">{activeKey}</div>
                    {selectedPage()}
                </div>
            </div>
        </div>
    );
}