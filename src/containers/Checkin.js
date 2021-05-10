import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Checkin.css";
import StateManager from "react-select";

export default function Checkin() {
  const [email, setEmail] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [churchLocation, setChurchLocation] = useState("");

  const [householdNo, setHouseholdNo] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [men, setMen] = useState("");
  const [women, setWomen] = useState("");
  const [youths, setYouths] = useState("");
  const [kids, setKids] = useState("");
  const [householdMembers, setHouseholdMember] = useState([]);
  const [pastor, setPastor] = useState("");
  const [feedback, setFeedback] = useState("");

  function validateForm() {
    return true
    return email.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const updateHousehold = (number) => {
    setHouseholdNo(number);
    let _household = [...householdMembers];
    for (let i = householdMembers.length; i < Number(number); i++) {
      _household.push({
        firstName: '',
        lastName: '',
        email: "",
        phone: "",
        category: ""
      })
      setHouseholdMember([..._household])
    }
  }

  const updateMemberDetails = (index, key, value) => {
    let _household = [...householdMembers];
    let object = { ..._household[index] };
    object[key] = value;
    _household[index] = { ...object };
    setHouseholdMember([..._household]);
  }

  const getHouseHoldCategoryNumber = (type) => {
    const total = householdMembers.filter(h => h.category === type);
    return total.length;
  }

  // const updateAge = (value) => {
  //   if ((Number(value) >= 0 && Number(value) < 200) || value === '') {
  //     setAge(value)
  //   }
  // }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form>

          <Form.Row>
            <Form.Group
              style={{ textAlign: "initial" }}
              as={Col} controlId="email">
              <Form.Label
                className="center-text"
              >No. of people in household.(including you)</Form.Label>
              {/* <Form.Control type="text"
                name="firstName"
                value={FirstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)} /> */}
            </Form.Group>
            <Form.Group as={Col} controlId="phonenumber">
              {/* <Form.Label>Last Name</Form.Label> */}
              <Form.Control as="select" value={householdNo} onChange={(e) => updateHousehold(e.target.value)}>
                <option value="" disabled>Choose...</option>
                {[...Array(10).keys()].map((value, i) =>
                  <option key={i} value={value + 1}>{value + 1}</option>
                )}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <div className="table-header">
            <b style={{ marginRight: '1%' }}>Total:</b>{(householdNo === '' ? 0 : householdNo)}
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
                <td>{getHouseHoldCategoryNumber('Men')}</td>
                <td>{getHouseHoldCategoryNumber('Women')}</td>
                <td className="sub-table-container">
                  <table width="100%" className="sub-table">
                    <thead>
                      <th style={{ borderRight: '1px solid lightgrey' }}>Bro</th>
                      <th>Sis</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ borderRight: '1px solid lightgrey' }}>{getHouseHoldCategoryNumber('Youths(male)')}</td>
                        <td>{getHouseHoldCategoryNumber('Youths(female)')}</td>
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
                        <td style={{ borderRight: '1px solid lightgrey' }}>{getHouseHoldCategoryNumber('Kids(male)')}</td>
                        <td>{getHouseHoldCategoryNumber('Kids(female)')}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {householdNo !== '' &&
            <>
              <Form.Row>
                <Form.Label
                  className="mt-2 mb-3 text-muted"
                  style={{ alignSelf: "left", fontWeight: "bold" }}
                >Members of your household</Form.Label>
              </Form.Row>
              {[...Array(Number(householdNo)).keys()].map((value, i) =>
                <>
                  <Form.Label
                    className="mt-2 mb-3 text-muted"
                    style={{ display: "flex" }}
                  >Member {value + 1}</Form.Label>
                  <Form.Row>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Enter first name</Form.Label>
                      <Form.Control type="text" placeholder="First name"
                        value={householdMembers[i].firstName} onChange={(e) => updateMemberDetails(i, 'firstName', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Enter last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name"
                        value={householdMembers[i].lastName} onChange={(e) => updateMemberDetails(i, 'lastName', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Enter email address</Form.Label>
                      <Form.Control type="text" placeholder="Email address"
                        value={householdMembers[i].email} onChange={(e) => updateMemberDetails(i, 'email', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Enter phone number</Form.Label>
                      <Form.Control type="text" placeholder="(xxx) xxx-xxxx"
                        value={householdMembers[i].phone} onChange={(e) => updateMemberDetails(i, 'phone', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select"
                        value={householdMembers[i].category} onChange={(e) => updateMemberDetails(i, 'category', e.target.value)}
                      >
                        <option value="" disabled>Choose...</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Youths(male)">Youths(male)</option>
                        <option value="Youths(female)">Youths(female)</option>
                        <option value="Kids(male)">Kids(male)</option>
                        <option value="Kids(female)">Kids(female)</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </>
              )}
              <div style={{ borderBottom: '1px solid lightgrey', marginBottom: '1%' }}></div>
            </>
          }

          <Form.Row>
            <Form.Group as={Col} controlId="pastor">
            <Form.Label>Church Location</Form.Label>
              <Form.Control as="select"
                value={churchLocation} onChange={(e) => setChurchLocation(e.target.value)}
              >
                <option value="" disabled>Choose...</option>
                <option value="Spring">Spring</option>
                <option value="Haviton">Haviton</option>
                <option value="Dallas">Dallas</option>
                <option value="Austin">Austin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="pastor">
              <Form.Label>Enter pastor's name</Form.Label>
              <Form.Control type="text" value={pastor} placeholder="Pastor's name" onChange={(e) => setPastor(e.target.value)} />
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="Address">
            <Form.Label>Prayer Request</Form.Label>
            <Form.Control as="textarea" value={prayerRequest} placeholder="Prayer request" onChange={(e) => setPrayerRequest(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Feedback Note (optional) </Form.Label>
            <Form.Control as="textarea" value={feedback} placeholder="Write Feedback Note " onChange={(e) => setFeedback(e.target.value)} />
          </Form.Group>

          <Button block size="lg"
            type="submit"
            disabled={!validateForm()}>
            Submit
        </Button>

        </Form>
      </Form>
    </div>
  );
}