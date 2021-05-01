import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './WeeklyMeeting.css';

export default function WeeklyMeeting(props) {

    const { week, setWeek,
        memberSws, setMemberSws,
        memberBS, setMemberBs,
        memberRETS, setMemberRETS,
        memberRemarks, setMemberRemarks,

        visitorSws, setVisitorSws,
        visitorBS, setVisitorBs,
        visitorRETS, setVisitorRETS,
        visitorRemarks, setVisitorRemarks,

        totalRemarks, setTotalRemarks } = props;

    return (
        <>
            <div className="w-50 m-1">
                <span className="title-label"> Week:</span>
                <select name="Week" onChange={(e) => setWeek(e.target.valuez)} value={week}>
                    <option value=""> -- Select week--</option>
                    <option value="Week One">Week One</option>
                    <option value="Week Two">Week Two</option>
                    <option value="Week Three">Week Three</option>
                    <option value="Week Four">Week Four</option>
                </select>
            </div>
            <table className="full-width-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>SWS</th>
                        <th>BS</th>
                        <th>R.E.T.S</th>
                        <th colSpan="1">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Members</td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={memberSws}
                                onChange={(e) => setMemberSws(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={memberBS}
                                onChange={(e) => setMemberBs(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={memberRETS}
                                onChange={(e) => setMemberRETS(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-140"
                                value={memberRemarks}
                                onChange={(e) => setMemberRemarks(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Visitors</td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={visitorSws}
                                onChange={(e) => setVisitorSws(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={visitorBS}
                                onChange={(e) => setVisitorBs(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                type="number"
                                value={visitorRETS}
                                onChange={(e) => setVisitorRETS(e.target.value)}
                            />
                        </td>
                        <td>
                            <input className="w-140"
                                value={visitorRemarks}
                                onChange={(e) => setVisitorRemarks(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>
                            <input className="w-100"
                                value={Number(memberSws) + Number(visitorSws)}
                                onChange={(e) => { }}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                value={Number(memberBS) + Number(visitorBS)}
                                onChange={(e) => { }}
                            />
                        </td>
                        <td>
                            <input className="w-100"
                                value={Number(memberRETS) + Number(visitorRETS)}
                                onChange={(e) => { }}
                            />
                        </td>
                        <td>
                            <input className="w-140"
                                value={totalRemarks}
                                onChange={(e) => setTotalRemarks(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}