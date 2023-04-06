import React from "react";

const EducationItem = ({ id, educationItem, onChange }) => {
  return (
    <>
      <fieldset className="education">
        {/* separate input field visually : SCHOOL NAME  */}
        <label>
          School Name
          <input
            name="school"
            value={educationItem.school}
            onChange={(e) => onChange(e, id)}
            placeholder="School Name"
          />
        </label>
        {/* separate input field visually : DEGREE TITLE  */}
        <label>
          Degree Title
          <input
            name="degree"
            value={educationItem.degree}
            onChange={(e) => onChange(e, id)}
            placeholder="Degree Title"
          />
        </label>
        {/* separate input field visually : START YEAR */}
        <label>
          To
          <input
            name="to"
            value={educationItem.to}
            onChange={(e) => onChange(e, id)}
            placeholder="YYYY"
            type="number"
          />
        </label>
        {/* separate input field visually : END YEAR */}
        <label>
          From
          <input
            name="from"
            value={educationItem.from}
            onChange={(e) => onChange(e, id)}
            placeholder="YYYY"
            type="number"
          />
        </label>
      </fieldset>
    </>
  );
};

export default EducationItem;
