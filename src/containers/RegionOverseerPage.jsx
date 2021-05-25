import React from 'react'
import '../assets/styles/css/paster-portal.css'
import {Link} from 'react-router-dom'
function RegionOverseerPage() {
    const PasterPortalLinks=[
        {DisplayLink:"View Attendance Report",Link:""},
        {DisplayLink: "View Posters And Contact",Link:""},
        {DisplayLink:"Email All Posters",Link:""},
        {DisplayLink:"View Attendence Graph",Link:""},
        {DisplayLink:"Add Event?",Link:""}
    ]
  
    return (
        <>
         <h1 className="pastor-portal-main-heading">Region Overseer Page</h1>
        <div className="PastorPortal RegionOverseerPage">
           
            {PasterPortalLinks.map(EachLink=>(
                <Link to={EachLink.Link}>{EachLink.DisplayLink}</Link>
            ))}
        </div>
        </>
    )
}

export default RegionOverseerPage
