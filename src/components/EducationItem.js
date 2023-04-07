import React from "react";

const EducationItem = ({ id, educationItem, onChange, onAdd, onDelete }) => {
  return (
    <>
      <fieldset>
        <label>
          School Name
          <input
            name="school"
            value={educationItem.school}
            onChange={(e) => onChange(e, id)}
            placeholder="School Name"
          />
        </label>
        <label>
          Degree Title
          <input
            name="degree"
            value={educationItem.degree}
            onChange={(e) => onChange(e, id)}
            placeholder="Degree Title"
          />
        </label>
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
        <button onClick={() => onDelete(id)}>Delete</button>
      </fieldset>
    </>
  );
};

export default EducationItem;