import React from "react";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <>
      <div className="title title-wrapper">Resume</div>
      <div className="personal">
        <fieldset>
          {/* separate input field visually : FIRST NAME  */}
          <label>
            First Name
            <input
              value={personalInfo.firstName}
              name="firstName"
              onChange={(e) => onChange(e)}
              placeholder="First Name"
            />
          </label>
          {/* separate input field visually : LAST NAME  */}
          <label>
            Last Name
            <input
              value={personalInfo.lastName}
              name="lastName"
              onChange={(e) => onChange(e)}
              placeholder="Last Name"
            />
          </label>
          {/* separate input field visually : EMAIL  */}
          <label>
            Email
            <input
              value={personalInfo.email}
              name="email"
              onChange={(e) => onChange(e)}
              placeholder="john.doe@fake.mail"
            />
          </label>
          {/* separate input field visually : PHONE NUMBER  */}
          <label>
            Phone Number
            <input
              value={personalInfo.phoneNumber}
              name="phoneNumber"
              onChange={(e) => onChange(e)}
              placeholder="0123 456 789"
              type="number"
            />
          </label>
        </fieldset>
      </div>
    </>
  );
};

export default Personal;
