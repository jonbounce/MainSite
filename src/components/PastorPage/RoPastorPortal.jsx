import React from 'react'

function RoPastorPortal() {
    return (
        <div className="RoPastorPortal pastor-portal-type">
            <form>
                <div className="text-area-wrapper">
                    <label htmlFor="Request">Request</label>
                    <textarea name="" placeholder="Enter Your Request Here..." id="Request" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RoPastorPortal
