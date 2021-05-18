import React, { useState } from "react";

import "./Register.css";

import RegisterUserType, { USERS } from "./RegisterUserType";
import Visitor from "./Visitor";
import RegisterAnIndividual from "../components/Register/RegisterAnIndividual";
import RegisterAHouseHold from "../components/Register/RegisterAHouseHold";
import RegisterPoster from "../components/Register/RegisterPoster";
import RegisterRO from "../components/Register/RegisterRO";

export default function Register() {
  const [userType, setUserType] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [ChurchAddress, setChurchAddress] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [City, setCity] = useState("");

  const [pastor, setPastor] = useState("");
  const [isMember, setMember] = useState(false);
  const [worker, setWorker] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const updateAge = (value) => {
    if ((Number(value) >= 0 && Number(value) < 200) || value === "") {
      setAge(value);
    }
  };

  return (
    <>
      {userType === "" ? (
        <RegisterUserType setUserType={setUserType} />
      ) : (
        <>
          <div className="register-header">
            Register as:<b className="ml-1"> {userType}</b>
            <button
              className="outline-button ml-2"
              onClick={() => setUserType("")}>
              Change
            </button>
          </div>
          {userType == "AN INDIVIDUAL" && <RegisterAnIndividual />}
          {userType == "A HOUSEHOLD" && <RegisterAHouseHold />}
          {userType == "PASTOR" && <RegisterPoster />}
          {userType == "RO" && <RegisterRO />}
        </>
      )}
    </>
  );
}
