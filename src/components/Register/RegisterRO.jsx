import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StateManager from "react-select";
import '../../assets/styles/css/Register.css'
function RegisterRO() { 
const History=useHistory()
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Confirmpassword, setConfirmpassword] = useState("");

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [date, setDate] = useState("");
const [country, setCountry] = useState("");
const [PhoneNumber, setPhoneNumber] = useState("");

const [region, setRegion] = useState("");


const [username, setUsername] = useState("");

function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const UserData={
        "email":email,
        "password":password,
        "Confirmpassword":Confirmpassword,
       
        "FirstName":FirstName,
        "LastName":LastName,
        "date":date,
        "country":country,
        "PhoneNumber":PhoneNumber,
      
        "region":region,
       
    
        "username":username
    }
    console.log(UserData)
    History.push("/login")
  }




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
                        name="firstName"
                        value={LastName}
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>


                  </Form.Row>

                 <Form.Row>
                

                 <Form.Group as={Col} controlId="date-of-birth">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                       
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
<Form.Group as={Col} controlId="phonenumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={PhoneNumber}
                        placeholder="(xxx) xxx-xxxx"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Form.Group>
                   
                  <Form.Group as={Col} controlId="gender">
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
</Form.Row>
                 

          

                  <Form.Row>
                  <Form.Group as={Col} controlId="Region">
                      <Form.Label>Region</Form.Label>
                      <Form.Control
                        as="select"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}>
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="South West">South West</option>
                        <option value="North Ease">North Ease</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
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

export default RegisterRO
