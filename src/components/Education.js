import React, { useState } from "react";
import "uniqid";

const Education = ({ onDelete }) => {
  const [schoolName, setSchoolName] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  return (
    <>
      <fieldset className="education">
        {/* separate input field visually : SCHOOL NAME  */}
        <label>
          School Name
          <input
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="School Name"
            required={true}
          />
        </label>
        {/* separate input field visually : DEGREE TITLE  */}
        <label>
          Degree Title
          <input
            value={degreeTitle}
            onChange={(e) => setDegreeTitle(e.target.value)}
            placeholder="Degree Title"
            required={true}
          />
        </label>
        {/* separate input field visually : GRADUATION YEAR */}
        <label>
          Graduation Year
          <input
            value={graduationDate}
            onChange={(e) => setGraduationDate(e.target.value)}
            placeholder="YYYY"
            pattern="[0-9]{4}"
            type="number"
            required={true}
          />
        </label>
        <button onClick={onDelete}>Delete</button>
      </fieldset>
    </>
  );
};

export default Education;
