import React from 'react'
import '../assets/styles/css/CheckIn.css'
import {Link} from 'react-router-dom'
function HouseHolderCheckIn() {
    return (
        <div className="HouseHolderCheckIn">
           <form>
               <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Father">Father</label>
                   <input type="text" className="pure-input" id="Father" />
               </div>
               <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Mother">Mother</label>
                   <input type="text" className="pure-input" id="Mother"/>
               </div>
               <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Kid1">Kid 1</label>
                   <input type="text" className="pure-input" id="Kid1"/>
               </div>    <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Kid2">Kid 2</label>
                   <input type="text" className="pure-input" id="Kid2"/>
               </div>  <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Grand-Ma">Grand-Ma</label>
                   <input type="text" className="pure-input" id="Grand-Ma"/>
               </div>
               <div className="input-wrapper">
                   <input type="checkbox" name="" id="" />
                   <label htmlFor="Grand-Pa">Grand-Pa</label>
                   <input type="text" className="pure-input" id="Grand-Pa"/>
               </div>
               <div className="input-wrapper no-checkbox">
                  
                   <label htmlFor="church-location">Church Location</label>
                   <select name="" id="church-location">
                       <option disabled>Select</option>
                       <option value="dallas">Dallas</option>
                       <option value="Spring">Spring</option>
                       <option value="Houston">Houston</option>
                       <option value="Austin">Austin</option>
                   </select>
               </div>
               <div className="input-wrapper no-checkbox">
                  
                   <label htmlFor="Region">Region</label>
                   <input type="text" className="pure-input" id="Region"/>
               </div>
               <div className="input-wrapper no-checkbox">
                  
                   <label htmlFor="pasters-name">Pastor's Name</label>
                   <input type="text" className="pure-input" id="pasters-name"/>
               </div>


               <Link>Add New Member to HouseHold</Link>
               <Link to="/HouseHolderCheckIn/UpdateInformation">To Update Information Click Here</Link>
               <div className="input-wrapper">
                   <input type="checkbox" name="" id="details-check" />
                   <label htmlFor="details-check">Check If All detail's are correct</label>
               </div>

               <input type="submit" value="Check In" className="submit-button-check-in" />
           </form>

        
        </div>
    )
}

export default HouseHolderCheckIn
