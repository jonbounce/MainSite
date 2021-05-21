import React from 'react'

function SubmitChallengesEncountered() {
    return (
        <div className="SubmitChallengesEncountered pastor-portal-type">
            <form>
                <div className="text-area-wrapper">
                    <label htmlFor="details">Details</label>
                    <textarea name="" id="details" cols="30" rows="10"></textarea>
                </div>
                <div className="text-area-wrapper">
                    <label htmlFor="action-taken">Action Taken</label>
                    <textarea name="" id="action-taken" cols="30" rows="10"></textarea>
                </div>
                <div className="text-area-wrapper">
                    <label htmlFor="recommended-action">Recommended Action</label>
                    <textarea name="" id="recommended-action" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SubmitChallengesEncountered
