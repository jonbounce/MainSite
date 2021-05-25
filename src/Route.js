import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
//import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Checkin from "./containers/Checkin";
import Register from "./containers/Register";
import Visitor from "./containers/Visitor";
import PasterPortal from "./containers/PasterPortal.jsx";
import HouseHolderCheckIn from "./containers/HouseHolderCheckIn";
import SubmitChallengesEncountered from "./components/PastorPage/SubmitChallengesEncountered";
import SpecialEvents from "./components/PastorPage/SpecialEvents";
import RoPastorPortal from "./components/PastorPage/RoPastorPortal";
import UpdateInformation from "./containers/UpdateInformation";
import RegionOverseerPage from "./containers/RegionOverseerPage";
import ChallengesEncounter from "./containers/ChallengesEncounter";
import HouseHoleMemberAdd from "./containers/HouseHoleMemberAdd";
import TestimonyInformation from "./containers/TestimonyInformation";
import MemberLogin from "./containers/MemberLogin";
import CheckInIndividual from "./containers/CheckInIndividual";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        {/* <HouseHoleMemberAdd /> */}
        {/* <TestimonyInformation /> */}
      </Route>

      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <MemberLogin />
      </Route>

      <Route exact path="/Checkin">
        <CheckInIndividual />
      </Route>
      <Route exact path="/HouseHolderCheckIn">
        <HouseHolderCheckIn />
      </Route>

      <Route exact path="/HouseHolderCheckIn/UpdateInformation">
        <UpdateInformation />
      </Route>
      <Route exact path="/HouseHolderCheckIn/add-new-member">
        <HouseHoleMemberAdd />
      </Route>

      <Route exact path="/Visitor">
        <Visitor />
      </Route>

      <Route exact path="/RegionOverseerPage">
        <RegionOverseerPage />
      </Route>
      <Route exact path="/pastor-portal">
        <PasterPortal />
      </Route>

      <Route exact path="/pastor-portal/challenges-encountered">
        <SubmitChallengesEncountered />
      </Route>
      <Route exact path="/pastor-portal/special-events">
        <SpecialEvents />
      </Route>
      <Route exact path="/pastor-portal/Request-to-RO">
        <RoPastorPortal />
      </Route>

      <Route exact path="/Register">
        <Register />
      </Route>
    </Switch>
  );
}
