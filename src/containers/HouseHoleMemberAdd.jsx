import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Checkin.css";
import StateManager from "react-select";

export default function HouseHoleMemberAdd () {
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
      <Form >
        <Form>

          <Form.Row>
            <Form.Group
              style={{ textAlign: "initial" }}
              as={Col} controlId="email">
              <Form.Label
                className="center-text"
                style={{fontSize:20}}
              >How many members do you want to add?</Form.Label>
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
                    style={{ display: "flex" ,fontWeight:"bold",fontSize:20}}
                  >Member {value + 1}</Form.Label>
                  <Form.Row>
                    <Form.Group as={Col} controlId="first-name">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" placeholder="First name"
                        value={householdMembers[i].firstName} onChange={(e) => updateMemberDetails(i, 'firstName', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="last-name">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name"
                        value={householdMembers[i].lastName} onChange={(e) => updateMemberDetails(i, 'lastName', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email-address">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="text" placeholder="Email address"
                        value={householdMembers[i].email} onChange={(e) => updateMemberDetails(i, 'email', e.target.value)}
                      />
                    </Form.Group>
                   
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="phone">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control type="text" placeholder="(xxx) xxx-xxxx"
                        value={householdMembers[i].phone} onChange={(e) => updateMemberDetails(i, 'phone', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Sex</Form.Label>
                      <Form.Control as="select"
                        value={householdMembers[i].sex} onChange={(e) => updateMemberDetails(i, 'sex', e.target.value)}
                      >
                        <option value="" >Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="category">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select"
                        value={householdMembers[i].category} onChange={(e) => updateMemberDetails(i, 'category', e.target.value)}
                      >
                        <option value="" >Choose...</option>
                        <option value="Grand Father">Grand Father</option>
                        <option value="Grand Mother">Grand Mother</option>
                        <option value="Visitor">Visitor</option>
                        <option value="New born">New born</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="section">
                      <Form.Label>Section</Form.Label>
                      <Form.Control as="select"
                        value={householdMembers[i].section} onChange={(e) => updateMemberDetails(i, 'section', e.target.value)}
                      >
                        <option value="">Choose...</option>
                        <option value="Young Adult">Young Adult</option>
                        <option value="Adult">Adult</option>
                        <option value="Youth">Youth</option>
                        <option value="New born">New born</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </>
              )}
              <div style={{ borderBottom: '1px solid lightgrey', marginBottom: '1%' }}></div>
            </>
          }

        
          <Button block size="lg"
            type="submit"
            className="mt-3"
            onClick={handleSubmit}
           >
            Update
        </Button>

        </Form>
      </Form>
    </div>
  );
}