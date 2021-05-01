import React, { useState } from 'react';

export default function SpecialEvents(props) {

    const {
        description, setDescription,
        date, setDate,
        action, setAction,
        remarks, setRemarks
    } = props

    return (
        <>
            <table className="full-width-table" style={{ width: '100%', marginTop: '2%' }}>
                <thead>
                    <tr>
                        <th>DESCRIPTION</th>
                        <th>DATE</th>
                        <th>ACTION</th>
                        <th>REMARKS</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea className="w-100"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea className="w-100"
                                rows={4}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea className="w-100"
                                rows={4}
                                value={action}
                                onChange={(e) => setAction(e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea className="w-100"
                                rows={4}
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                            />
                        </td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}