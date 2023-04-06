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
        {/* separate input field visually : GRADUATION YEAR */}
        <label>
          Graduation Year
          <input
            name="graduation"
            value={educationItem.graduation}
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
