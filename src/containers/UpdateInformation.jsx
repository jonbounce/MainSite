import React, { useState } from 'react'
import { Container, Row, Col, FormCheck, Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router';
function UpdateInformation() {  const History=useHistory()
    const [address,setAddress]=useState("")
    const [state,setstate]=useState("")
    const [city,setCity]=useState("")
    const [zip,setZip]=useState("")
    const [phone,setPhone]=useState("")
    const [locaton,setlocation]=useState("")
    const [email,setemail]=useState("")

    function handleSubmit(event) {
        event.preventDefault();  
         const UserData={
          "email":email,
            "Adress":address,
          "ChurchAddress":locaton,
        
          "PhoneNumber":phone,
          "City":city,
         
          "state":state,
          "zip":zip,
         
      }
      console.log(UserData)
      History.push("/")
      }

      

    return (
        <div className="UpdateInformation">
               <Form>

               <Form.Row>
                <Form.Group as={Col}>
                   <Form.Label>Update Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="Enter Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                   <Form.Label>Update Email Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="email-address"
                        value={email}
                        placeholder="Enter Email Address"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="State">
                      <Form.Label>Curch Location</Form.Label>
                      <Form.Control value={locaton} onChange={e=>setlocation(e.target.value)}as="select" defaultValue="Choose...">
                        <option disabled>Choose...</option>
                        <option value="texas">Texas</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="arizona">Arizona</option>
                        <option value="new mexico">New Mexico</option>
                      </Form.Control>
                    </Form.Group>
                </Form.Row>
               <Form.Row>
                   <Form.Group as={Col}>
                   <Form.Label>Update Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={address}
                        placeholder="street#"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                   </Form.Row>



                   <Form.Row>
                   <Form.Group as={Col}>
                   <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setstate(e.target.value)}
                      />
                    </Form.Group>
                   <Form.Group as={Col}>
                   <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Group>
                   <Form.Group as={Col}>
                   <Form.Label>Zip code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={zip}
                        placeholder="zip"
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </Form.Group>
                   </Form.Row>

                   <Button
                    block
                    size="lg"
                    type="submit"
                    onClick={handleSubmit}>
                    Update Information
                  </Button>
                  
               </Form>
        </div>
    )
}

export default UpdateInformation
