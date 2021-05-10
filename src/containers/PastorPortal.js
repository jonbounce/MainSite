import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
import './PastorPortal.css';
import SubmitMonthlyAttendance from './SubmitMonthlyAttendence';

export default function PastorPortal() {

    const drawerChildren = [
        "Submit Monthly Attendance", "Submit Challenges Encountered",
        "Submit Special Events/Programs", "Submit Testimonal Information",
        "Special Request to RO"
    ]

    const [month, setMonth] = useState("");
    const [weekno, setWeekno] = useState("");
    const [bibleStudy, setBibleStudy] = useState("");
    const [ChurchAddress, setChurchAddress] = useState("");
    const [pastor, setPastor] = useState("");

    const [sundayWorshipService, setSundayWorshipService] = useState("");
    const [revivalService, setRevivalService] = useState("");

    const [member, setMember] = useState("");
    const [visitor, setVisitor] = useState("");

    const [bibleStudyTotal, setBibleStudyTotal] = useState("");
    const [sundayWorshipServiceTotal, setSundayWorshipServiceTotal] = useState("");
    const [revivalServiceTotal, setRevivalServiceTotal] = useState("");
    const [remarks, setRemarks] = useState("")

    const [activeKey, setActiveKey] = useState(drawerChildren[0]);

    function validateForm() {
        return true
    }

    function handleSubmit(event) {
        event.preventDefault();
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
                    <SubmitMonthlyAttendance />
                </div>
            </div>
        </div>
    );
}