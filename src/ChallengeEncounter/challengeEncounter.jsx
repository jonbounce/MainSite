import React, { useState } from 'react';

export default function ChallengeEncounter(props) {

    const { details, setDetails,
        actionTaken, setActionTaken,
        recommended, setRecommended } = props;

    return (
        <>
            <table className="full-width-table" style={{ width: '100%', marginTop: '2%' }}>
                <thead>
                    <tr>
                        <th>DETAILS</th>
                        <th>ACTION TAKEN</th>
                        <th>RECOMMENDED FURTHER ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea className="w-100"
                                rows={3}
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea className="w-100"
                                rows={3}
                                value={actionTaken}
                                onChange={(e) => setActionTaken(e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea className="w-100"
                                rows={3}
                                value={recommended}
                                onChange={(e) => setRecommended(e.target.value)}
                            />
                        </td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}