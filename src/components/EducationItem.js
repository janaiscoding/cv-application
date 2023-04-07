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
          Degree
          <input
            name="degree"
            value={educationItem.degree}
            onChange={(e) => onChange(e, id)}
            placeholder="Degree Title"
          />
        </label>
        <label className="duration">
          <input
            name="to"
            value={educationItem.to}
            onChange={(e) => onChange(e, id)}
            placeholder="to"
            type="number"
          />
          <input
            name="from"
            value={educationItem.from}
            onChange={(e) => onChange(e, id)}
            placeholder="from"
            type="number"
          />
        </label>
        <div className="delete" onClick={() => onDelete(id)}>
          Delete
        </div>
      </fieldset>
    </>
  );
};

export default EducationItem;
