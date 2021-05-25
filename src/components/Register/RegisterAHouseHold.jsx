import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
function RegisterAHouseHold() { 
  const Hisory=useHistory()
    const [userType, setUserType] = useState("");

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Confirmpassword, setConfirmpassword] = useState("");
const [ChurchAddress, setChurchAddress] = useState("");
const [City, setCity] = useState("")
const [pastor, setPastor] = useState("");
const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [gender, setGender] = useState("");

const [PhoneNumber, setPhoneNumber] = useState("");
const [country, setCountry] = useState("");
const [state, setState] = useState("");
const [zip, setZip] = useState("");
const [isMember, setMember] = useState(false);
const [activity, setActivity] = useState("");
const [category, setCategory] = useState("");
const [group, setGroup] = useState("");
const [username, setUsername] = useState("");const [date, setDate] = useState("");
function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();   const UserData={
      "email":email,
      "password":password,
      "Confirmpassword":Confirmpassword,
      "ChurchAddress":ChurchAddress,
      "FirstName":FirstName,
      "LastName":LastName,
      "date":date,
      "country":country,
      "PhoneNumber":PhoneNumber,
      "City":City,
      "pastor":pastor,
    
      "state":state,
      "zip":zip,
      "username":username
  }
  console.log(UserData)
  History.push("/login")
  }

  const updateAge = (value) => {
  
  };

  
    return (
        <div className="Login">
              <Form>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="first-name">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={FirstName}
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="last-name">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="Last name"
                        value={LastName}
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>

                  
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="activity">
                      <Form.Label>Church Activity</Form.Label>
                      <Form.Control
                        as="select"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}>
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Poster">Poster</option>
                        <option value="Worker">Worker</option>
                        <option value="Member">Member</option>
                      </Form.Control>
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

                    <Form.Group as={Col} controlId="category">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        as="select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Member1">Member1</option>
                        <option value="Member2">Member2</option>
                        <option value="Member3">Member3</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="date-of-birth">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                       
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Form.Group>

                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="Sex">
                      <Form.Label>Sex</Form.Label>
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

                    <Form.Group as={Col} controlId="Group-Section">
                          <Form.Label>Group Section</Form.Label>
                          <Form.Control
                            as="select"
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}>
                            <option value="" disabled>
                              Choose...
                            </option>
                            <option value="Young Adult">Young Adult</option>
                            <option value="Youth">Youth</option>
                            <option value="Children">Children</option>
                           
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="pastor">
                        <Form.Label>Your pastor's name</Form.Label>
                        <Form.Control
                          type="text"
                          value={pastor}
                          placeholder="Pastor's name"
                          onChange={(e) => setPastor(e.target.value)}
                        />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="Address">
                    <Form.Label>Enter your Church Address</Form.Label>
                    <Form.Control
                      value={ChurchAddress}
                      placeholder="1234 Main St"
                      onChange={(e) => setChurchAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Row><Form.Group as={Col} controlId="gender">
  <Form.Label>Country</Form.Label>
  <Form.Control
    as="select"
    value={country}
    onChange={(e) => setCountry(e.target.value)}>
    <option value="" disabled>
      Choose...
    </option>
    <option value="America">America</option>
    <option value="Example">Example</option>
  </Form.Control>
</Form.Group>
                    <Form.Group as={Col} controlId="City">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Group>

                  
                    <Form.Group as={Col} controlId="State">
                      <Form.Label>State</Form.Label>
                      <Form.Control value={state} onChange={e=>setState(e.target.value)}as="select" defaultValue="Choose...">
                        <option disabled>Choose...</option>
                        <option value="texas">Texas</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="arizona">Arizona</option>
                        <option value="new mexico">New Mexico</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Zip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" value={zip} onChange={e=>setZip(e.target.value)} />
                    </Form.Group>

                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
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
                    onClick={handleSubmit}
                    disabled={!validateForm()}>
                    Register
                  </Button>
                </Form>
              </Form>
            </div>
    )
}

export default RegisterAHouseHold
