import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/css/AfterLogin.css'
function MemberLogin() {
    return (
        <div className="member-login">
            <Link to="/Checkin">Member CheckIn</Link>
            <Link>Update Information</Link>
        </div>
    )
}

export default MemberLogin
