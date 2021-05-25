import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import '../assets/styles/css/CheckIn.css'
import { Container, Row, Col, FormCheck, Button } from "react-bootstrap";
function CheckInIndividual() { 
    const [email, setEmail] = useState("");
   
    const [churchLocation, setChurchLocation] = useState("");
  
    const [pastor, setPastor] = useState("");
  
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [gender, setGender] = useState("");

    const [service, setService] = useState("");
    const [phone, setPhone] = useState("");
    const [homeAddress, sethomeAddress] = useState("");
    const [region, setRegion] = useState("");
    const [detailsCheck, setdetailCheck] = useState("");
  

    function handleSubmit(event) {
    event.preventDefault();
    let Instance={
        email:email,
        churchLocation:churchLocation,
pastor:pastor,
FirstName:FirstName,
LastName:LastName,
gender:gender,
service:service,
phone:phone,
homeAddress:homeAddress,
region:region,
detailsCheck:detailsCheck,

    }
    console.log(Instance)
  }
    return (
        <div className="CheckInIndividual">
             <Form>
           <Form.Row>
           <Form.Group as={Col} controlId="first-name">
                      <Form.Label>First name</Form.Label>
                      <Form.Control value={FirstName} onChange={e=>setFirstName(e.target.value)} type="text" placeholder="First name"
                       
                      />
                    </Form.Group>
                   
           </Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="last-name">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control value={LastName} onChange={e=>setLastName(e.target.value)} type="text" placeholder="Last name"
                      
                      />   </Form.Group> 
</Form.Row>
           <Form.Row>
          
<Form.Group as={Col} controlId="location">
                      <Form.Label>Church Location</Form.Label>
                      <Form.Control value={churchLocation} onChange={e=>setChurchLocation(e.target.value)}type="text" placeholder="Church Location"
                      
                      />
                    </Form.Group> 

           </Form.Row>





           <Form.Row>
           

           <Form.Group as={Col} controlId="pastor">
                      <Form.Label>Pastor</Form.Label>
                      <Form.Control value={pastor} onChange={e=>setPastor(e.target.value)} type="text" placeholder="Pastor"
                      
                      />
                    </Form.Group> 

           </Form.Row>


           <Form.Row>
                   <Form.Group as={Col} controlId="service-type">
                      <Form.Label>Service Type</Form.Label>
                      <Form.Control as="select"
                        value={service} onChange={e=>setService(e.target.value)}
                      >
                        <option value="" >Choose...</option>
                        <option value="Bible study">Bible study</option>
                        <option value="Revival Hour">Revival Hour</option>
                        <option value="Sunday Serving">Sunday Serving</option>
                        <option value="Special Events">Special Events</option>
                      </Form.Control>
                    </Form.Group>
                   </Form.Row>
                   
                   <Form.Row>
                   <Form.Group as={Col} controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control as="select"
                        value={gender} onChange={e=>setGender(e.target.value)}
                      >
                        <option value="" >Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       
                      </Form.Control>
                    </Form.Group>
                   </Form.Row>


                   <Form.Row>
                   <Form.Group as={Col} controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email Address"
                      
                      />
                    </Form.Group> 
                   </Form.Row>

                   <Form.Row>
                   <Form.Group as={Col} controlId="phone-number">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control  value={phone} onChange={e=>setPhone(e.target.value)}  type="text" placeholder="Phone Number"
                      
                      />
                    </Form.Group> 
                   </Form.Row>
                   
                   


                   <Form.Row>
                   <Form.Group as={Col} controlId="home-address">
                      <Form.Label>Home Address</Form.Label>
                      <Form.Control  value={homeAddress} onChange={e=>sethomeAddress(e.target.value)}  type="text" placeholder="Home Address"
                      
                      />
                    </Form.Group> 
                   </Form.Row>
                   
                   
                   <Form.Row>
                   <Form.Group as={Col} controlId="region">
                      <Form.Label>Region</Form.Label>
                      <Form.Control  value={region} onChange={e=>setRegion(e.target.value)}   type="text" placeholder="Region"
                      
                      />
                    </Form.Group> 
                   </Form.Row>
                   
                   
        <div className="checkbox-wrapper">
         
            <input type="checkbox" onChange={e=>setdetailCheck(e.target.value)}   id="all-check" />
            <label htmlFor="all-check">Check if all details are correct</label>
        </div>
                   
                    
          <Button block size="lg"
            type="submit"
            className="mt-3"
            onClick={handleSubmit}
           >
            Check In
        </Button>

             </Form>

        </div>
    )
}

export default CheckInIndividual
