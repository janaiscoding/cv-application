import React from "react";

const ExperienceItem = ({ id, experienceItem, onChange, onAdd, onDelete }) => {
  return (
    <>
      <fieldset>
        {/* separate input field visually : POSITION  */}
        <label>
          Position
          <input
            name="position"
            value={experienceItem.position}
            onChange={(e) => onChange(e, id)}
            placeholder="Position"
          />
        </label>
        {/* separate input field visually : COMPANY NAME  */}
        <label>
          Company Name
          <input
            name="company"
            value={experienceItem.company}
            onChange={(e) => onChange(e, id)}
            placeholder="Company Name"
          />
        </label>
        {/* separate input field visually : MAIN TASKS  */}
        <label>
          Main Tasks
          <textarea
            rows="4"
            cols={20}
            name="tasks"
            id="tasks"
            type="text"
            value={experienceItem.tasks}
            onChange={(e) => onChange(e, id)}
            placeholder="Your tasks on this job"
          />
        </label>
        {/* separate input field visually : START YEAR */}
        <label>
          To
          <input
            name="to"
            value={experienceItem.to}
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
            value={experienceItem.from}
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

export default ExperienceItem;
