import React, { useState } from 'react';
import ChallengeEncounter from '../ChallengeEncounter/challengeEncounter';
import Headerbar from '../HeaderBar/HeaderBar';
import logo from "../logo.jfif";
import TextAreaBox from '../SingleTextArea/singleTextArea';
import SpecialEvents from '../SpecialEvents/specialEvents';
import Title from '../Title/Title';
import WeeklyMeeting from '../WeeklyMeeting/WeeklyMeeting';

const Header = () => (
    <header className="wrapper-header d-flex-center mt-5">
        <div className="app-logo-update">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{ marginLeft: '5%' }}>
            <h3 style={{ textAlign: "center" }}>DEEPER LIFE BIBLE CHURCH</h3> <h3 style={{ textAlign: "center" }}>DEEPER LIFE SOUTHWEST-USA REGIONAL REPORT</h3> <h3 style={{ textAlign: "center" }}> MONTHLY AND WEEKLY ACTIVITY RECORD</h3>
        </div>
    </header>
)

export default function Main() {

    // Weekly meeting
    const [week, setWeek] = useState("");
    const [memberSws, setMemberSws] = useState("");
    const [memberBS, setMemberBs] = useState("");
    const [memberRETS, setMemberRETS] = useState("");
    const [memberRemarks, setMemberRemarks] = useState("");

    const [visitorSws, setVisitorSws] = useState("");
    const [visitorBS, setVisitorBs] = useState("");
    const [visitorRETS, setVisitorRETS] = useState("");
    const [visitorRemarks, setVisitorRemarks] = useState("");

    const [totalRemarks, setTotalRemarks] = useState("");

    // Special events
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [action, setAction] = useState("");
    const [remarks, setRemarks] = useState("");


    // Title
    const [month, setMonth] = useState("");
    const [pastorName, setPastorName] = useState("");
    const [churchLocation, setChurchLocation] = useState("");
    const [State, setState] = useState("");

    // Challenge encounter
    const [details, setDetails] = useState("");
    const [actionTaken, setActionTaken] = useState("");
    const [recommended, setRecommended] = useState("");

    // Outreach
    const [outreach, setOutReach] = useState('');

    // Visitation
    const [visitation, setVisitation] = useState('');

    //Testimony
    const [testimony, setTestimony] = useState('');

    // Other remarks
    const [otherRemarks, setOtherRemarks] = useState('');

    // Submit
    const [isSubmitting, setSubmit] = useState(false);

    const clearAll = () => {
        setWeek('')
        setMemberSws('')
        setMemberBs('')
        setMemberRETS('')
        setMemberRemarks('')
        setVisitorSws('')
        setVisitorBs('')
        setVisitorRETS('')
        setVisitorRemarks('')
        setTotalRemarks('')
        setDescription('')
        setDate('')
        setAction('')
        setRemarks('')
        setMonth('')
        setPastorName('')
        setChurchLocation('')
        setDetails('')
        setActionTaken('')
        setRecommended('')
        setOutReach('')
        setVisitation('')
        setTestimony('')
        setOtherRemarks('')
        setState('')
    }
    const onSubmit = () => {
        setSubmit(true);
        clearAll();
        setTimeout(() => {
            setSubmit(false);
        }, 3000)
    }
    const SubmitButton = () => {
        return (
            <>
                <button onClick={onSubmit} className={"submit-button "
                    + (isSubmitting ? "disable-button" : "")
                }
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "SUBMITTING, PLEASE WAIT ..." : "SUBMIT"}
                </button>
            </>
        )
    }
    return (
        <>
            <Header />
            <Title
                month={month}
                setMonth={setMonth}
                pastorName={pastorName}
                setPastorName={setPastorName}
                churchLocation={churchLocation}
                setChurchLocation={setChurchLocation}
                setState={setState}
            />
            <Headerbar label="Weekly Meeting Attendance" />
            <WeeklyMeeting
                week={week}
                setWeek={setWeek}
                memberSws={memberSws}
                setMemberSws={setMemberSws}
                memberBS={memberBS}
                setMemberBs={setMemberBs}
                memberRETS={memberRETS}
                setMemberRETS={setMemberRETS}
                memberRemarks={memberRemarks}
                setMemberRemarks={setMemberRemarks}
                visitorSws={visitorSws}
                setVisitorSws={setVisitorSws}
                visitorBS={visitorBS}
                setVisitorBs={setVisitorBs}
                visitorRETS={visitorRETS}
                setVisitorRETS={setVisitorRETS}
                visitorRemarks={visitorRemarks}
                setVisitorRemarks={setVisitorRemarks}
                totalRemarks={totalRemarks}
                setTotalRemarks={setTotalRemarks}
            />
            <Headerbar label="Evangelistic Outreach To Non Members And Visitors" />
            <TextAreaBox
                value={outreach}
                onChange={setOutReach}
            />
            <Headerbar label="Visitation To Members" />
            <TextAreaBox
                value={visitation}
                onChange={setVisitation}
            />
            <Headerbar label="Challenges Encounters" />
            <ChallengeEncounter
                details={details}
                setDetails={setDetails}
                actionTaken={actionTaken}
                setActionTaken={setActionTaken}
                recommended={recommended}
                setRecommended={setRecommended}
            />
            <Headerbar label="Special Events And Programs" />
            <SpecialEvents
                description={description}
                setDescription={setDescription}
                date={date}
                setDate={setDate}
                remarks={remarks}
                setRemarks={setRemarks}
                action={action}
                setAction={setAction}
            />
            <Headerbar label="Testimony/Information" />
            <TextAreaBox
                value={testimony}
                onChange={setTestimony}
            />
            <Headerbar label="Other Remarks/Observations" />
            <TextAreaBox
                value={otherRemarks}
                onChange={setOtherRemarks}
            />
            <SubmitButton />
        </>
    )
}
