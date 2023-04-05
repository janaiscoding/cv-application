import React, { useState } from "react";
import "../utils/output.css";

const Personal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <fieldset className="personal">
        {/* separate input field visually : FIRST NAME  */}
        <label>
          First Name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required={true}
          />
        </label>
        {/* separate input field visually : LAST NAME  */}
        <label>
          Last Name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required={true}
          />
        </label>
        {/* separate input field visually : EMAIL  */}
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@fake.mail"
            required={true}
          />
        </label>
        {/* separate input field visually : PHONE NUMBER  */}
        <label>
          Phone Number
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="0123 456 789"
            type="number"
            required={true}
          />
        </label>
      </fieldset>
      {(firstName && lastName && email && phoneNumber) !== "" && (
        <div className="output">
          <p>
            Your name is {firstName} {lastName}.
          </p>
          <p>Your e-mail is {email}</p>
          <p>Your phone number is {phoneNumber}</p>
        </div>
      )}
    </>
  );
};

export default Personal;
