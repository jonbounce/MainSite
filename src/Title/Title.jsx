import React, { useState } from 'react';
import './title.css';

export default function Title(props) {

    const { month, setMonth,
        pastorName, setPastorName,
        churchLocation, state, setChurchLocation, setState } = props;
    return (
        <>
            <div className="title-container">
                <div className="w-50">
                    <span className="title-label"> Month:</span>
                    <select name="Month" onChange={(e) => setMonth(e.target.value)} value={month}>
                        <option value=""> -- Select Month--</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                    </select>
                </div>
                <div className="w-50">
                    <span className="title-label"> Pastor Name:</span>
                    <input value={pastorName} onChange={(e) => setPastorName(e.target.value)} />
                </div>
                <div className="w-50">
                    <span className="title-label">  Church Location:</span>
                    <select name="ChurchLocation" onChange={(e) => setChurchLocation(e.target.value)} value={churchLocation}>
                        <option value=""> -- Select a church location--</option>
                        <option value="Houston">Houston</option>
                        <option value="Spring">Spring</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Austin">Austin</option>
                    </select>
                </div>
                <div className="w-50">
                    <span className="title-label">  State:</span>
                    <select name="State" onChange={(e) => setState(e.target.value)} value={state}>
                        <option value=""> -- Select State--</option>
                        <option value="Houston">Texas</option>
                        <option value="Spring">Oklahoma</option>
                      </select>
                </div>
            </div>
        </>
    )
}
