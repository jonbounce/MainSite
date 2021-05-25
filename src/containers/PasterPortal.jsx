import React from 'react'
import '../assets/styles/css/paster-portal.css'
import {Link} from 'react-router-dom'
function PasterPortal() {
    const PasterPortalLinks=[
        {DisplayLink:"Submit Monthly Attendance",Link:"/pastor-portal/monthly-attendence"},
        {DisplayLink: "Submit Challenges Encountered",Link:"/pastor-portal/challenges-encountered"},
        {DisplayLink:"Submit Special Events/Programs",Link:"/pastor-portal/special-events"},
        {DisplayLink:"Special Request to RO",Link:"/pastor-portal/Request-to-RO"}
    ]
  
    return (
        <>
         <h1 className="pastor-portal-main-heading">Pastor Portal</h1>
        <div className="PastorPortal">
           
            {PasterPortalLinks.map(EachLink=>(
                <Link to={EachLink.Link}>{EachLink.DisplayLink}</Link>
            ))}
        </div>
        </>
    )
}

export default PasterPortal
