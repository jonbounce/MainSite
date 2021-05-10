import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
import { monthList, setPositiveNumber } from '../Common';

export default function SubmitMonthlyAttendance() {

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
    const [remarks, setRemarks] = useState("");
    const [serviceType, setServiceTypes] = useState("");


    function validateForm() {
        return true
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form>

                    <Form.Row>
                        <Form.Group as={Col} controlId="month">
                            <Form.Label>Month</Form.Label>
                            <Form.Control as="select"
                                value={month} onChange={(e) => setMonth(e.target.value)}
                            >
                                <option value="" disabled>Choose...</option>
                                {monthList.map((value, i) =>
                                    <option value={value} key={i}>{value}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="pastor">
                            <Form.Label>Pastor Name</Form.Label>
                            <Form.Control type="text"
                                value={pastor} placeholder="Pastor Name" onChange={(e) => setPastor(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Address">
                        <Form.Label>Enter your Church Address</Form.Label>
                        <Form.Control value={ChurchAddress} placeholder="1234 Main St" onChange={(e) => setChurchAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="weekno">
                            <Form.Label>Week number</Form.Label>
                            <Form.Control as="select" value={weekno} onChange={(e) => setWeekno(e.target.value)}>
                                <option value="" disabled>Choose...</option>
                                <option value="1">Week 1</option>
                                <option value="2">Week 2</option>
                                <option value="3">Week 3</option>
                                <option value="4">Week 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="biblestudy">
                            <Form.Label>Service type</Form.Label>
                            <Form.Control as="select" value={serviceType} onChange={(e) => setServiceTypes(e.target.value)}>
                                <option value="" disabled>Choose...</option>
                                <option value="Bible Study">Bible Study</option>
                                <option value="Sunday Worship Service">Sunday Worship Service</option>
                                <option value="Revival Evangelism Training Service">
                                    Revival Evangelism Training Service
                                </option>
                                <option value="Special Service">
                                    Special Service
                                </option>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                    <div className="table-header">
                        <b style={{ marginRight: '1%' }}>No of members:</b>
                        {/* {(householdNo === '' ? 0 : householdNo)} */}
                    </div>
                    <table width="100%" className="border-table">
                        <thead>
                            <th>Men</th>
                            <th>Women</th>
                            <th>Youths</th>
                            <th>Kids</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        min={0}
                                        placeholder="Total Men"
                                        className="td-input"
                                    />
                                </td>
                                <td>
                                    <input
                                        placeholder="Total Women"
                                        className="td-input"
                                    />
                                </td>
                                <td className="sub-table-container">
                                    <table width="100%" className="sub-table">
                                        <thead>
                                            <th style={{ borderRight: '1px solid lightgrey' }}>Bro</th>
                                            <th>Sis</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ borderRight: '1px solid lightgrey' }}>
                                                    <input
                                                        placeholder="Bro"
                                                        className="td-input"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        placeholder="Sis"
                                                        className="td-input"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="sub-table-container">
                                    <table width="100%" className="sub-table">
                                        <thead>
                                            <th style={{ borderRight: '1px solid lightgrey' }}>Boy(s)</th>
                                            <th>Girl(s)</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ borderRight: '1px solid lightgrey' }}>
                                                    <input
                                                        placeholder="Boy"
                                                        className="td-input"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        placeholder="Girl"
                                                        className="td-input"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Form.Row>
                        <Form.Group as={Col} controlId="sundayworshiptotal">
                            <Form.Label>Sunday Worship Service Total</Form.Label>
                            <Form.Control
                                type="number"
                                value={sundayWorshipServiceTotal} placeholder="Sunday Worship Service Total" onChange={(e) => setPositiveNumber(e.target.value, setSundayWorshipServiceTotal)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="biblestudytotal">
                            <Form.Label>Bible Study Total</Form.Label>
                            <Form.Control
                                type="number"
                                value={bibleStudyTotal} placeholder="Bible Study Total" onChange={(e) => setPositiveNumber(e.target.value, setBibleStudyTotal)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="revivaltotal">
                            <Form.Label>Revival Service Total</Form.Label>
                            <Form.Control
                                type="number"
                                value={revivalServiceTotal} placeholder="Revival Service Total" onChange={(e) => setPositiveNumber(e.target.value, setRevivalServiceTotal)} />
                        </Form.Group>
                    </Form.Row>

                    {/* 
                    <Form.Row>
                        <Form.Group as={Col} controlId="sundayservice">
                            <Form.Label>Sunday Worship Service</Form.Label>
                            <Form.Control type="text" value={sundayWorshipService} placeholder="Sunday Worship Service" onChange={(e) => setSundayWorshipService(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="revivalservice">
                            <Form.Label>Revival Evangelism Training Service</Form.Label>
                            <Form.Control type="text" value={revivalService} placeholder="Revival Evangelism Training Service" onChange={(e) => setRevivalService(e.target.value)} />
                        </Form.Group>
                    </Form.Row> */}

                    <Form.Row>
                        <Form.Group as={Col} controlId="member">
                            <Form.Label>Member</Form.Label>
                            <Form.Control type="text" value={member} placeholder="Member" onChange={(e) => setMember(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="visitor">
                            <Form.Label>Visitor</Form.Label>
                            <Form.Control type="text" value={visitor} placeholder="Visitor" onChange={(e) => setVisitor(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Address">
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={remarks}
                            row={2}
                            placeholder="Write remarks ..."
                            onChange={(e) => setRemarks(e.target.value)}
                        />
                    </Form.Group>

                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Submit
        </Button>

                </Form>
            </Form>
        </div >
    );
}