import React from 'react'

function SpecialEvents() {
    return (
        <div className="SpecialEvents pastor-portal-type">
            <form>
                <div className="text-area-wrapper">
                    <label htmlFor="description">Description</label>
                    <textarea name="" id="description" cols="30" rows="10"></textarea>
                </div>
                <div className="text-area-wrapper">
                    <label htmlFor="action">Action</label>
                    <textarea name="" id="action" cols="30" rows="10"></textarea>
                </div>
                <div className="text-area-wrapper">
                    <label htmlFor="remarks">Remarks</label>
                    <textarea name="" id="remarks" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SpecialEvents
