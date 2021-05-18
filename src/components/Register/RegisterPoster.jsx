import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
function RegisterPoster() { 
    const [userType, setUserType] = useState("");

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Confirmpassword, setConfirmpassword] = useState("");
const [ChurchAddress, setChurchAddress] = useState("");

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [gender, setGender] = useState("");
const [age, setAge] = useState("");
const [PhoneNumber, setPhoneNumber] = useState("");
const [City, setCity] = useState("");

const [pastor, setPastor] = useState("");
const [isMember, setMember] = useState(false);
const [worker, setWorker] = useState("");

function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const updateAge = (value) => {
    if ((Number(value) >= 0 && Number(value) < 200) || value === "") {
      setAge(value);
    }
  };

  
    return (
        <div className="Login">
              <Form onSubmit={handleSubmit}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={FirstName}
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="phonenumber">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={LastName}
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phonenumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={PhoneNumber}
                        placeholder="(xxx) xxx-xxxx"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="age">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        min={0}
                        value={age}
                        placeholder="Age"
                        onChange={(e) => updateAge(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Row>

                  {userType !== "PASTOR" && (
                    <Form.Row>
                      <Form.Group as={Col} controlId="pastor">
                        <Form.Label>Your pastor's name</Form.Label>
                        <Form.Control
                          type="text"
                          value={pastor}
                          placeholder="Pastor's name"
                          onChange={(e) => setPastor(e.target.value)}
                        />
                      </Form.Group>

                      {/* <Form.Group as={Col} controlId="member">
              <Form.Label>Member</Form.Label>
              <Form.Control type="text" value={member} placeholder="Member" onChange={(e) => setMember(e.target.value)} />
            </Form.Group> */}

                      {userType !== "MEMBER" && (
                        <Form.Group as={Col} controlId="worker">
                          <Form.Label>Worker</Form.Label>
                          <Form.Control
                            as="select"
                            value={worker}
                            onChange={(e) => setWorker(e.target.value)}>
                            <option value="" disabled>
                              Choose...
                            </option>
                            <option value="Usher">Usher</option>
                            <option value="Choir">Choir</option>
                            <option value="STS">STS</option>
                            <option value="Youth">Youth</option>
                            <option value="Young Adult">Young Adult</option>
                          </Form.Control>
                        </Form.Group>
                      )}
                    </Form.Row>
                  )}

                  <Form.Group controlId="Address">
                    <Form.Label>Enter your Church Address</Form.Label>
                    <Form.Control
                      value={ChurchAddress}
                      placeholder="1234 Main St"
                      onChange={(e) => setChurchAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="City">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="State">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Texas</option>
                        <option>Oklahoma</option>
                        <option>Arizona</option>
                        <option>New Mexico</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Zip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="confirmpassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={Confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Row>

                  {/* <div className="asking-member-text">
                Are you a member?
            <FormCheck
                  checked={isMember}
                  onClick={() => setMember(!isMember)}
                  className="ml-2 mt-1" />
              </div> */}

                  <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}>
                    Register
                  </Button>
                </Form>
              </Form>
            </div>
    )
}

export default RegisterPoster
