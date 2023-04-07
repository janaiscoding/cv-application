import React from "react";

const ExperienceItem = ({ id, experienceItem, onChange, onAdd, onDelete }) => {
  return (
    <>
      <fieldset>
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
        {/* separate input field visually : MAIN TASKS  */}
        <label>
          Main Tasks
          <textarea
            rows="4"
            cols={19}
            name="tasks"
            id="tasks"
            type="text"
            value={experienceItem.tasks}
            onChange={(e) => onChange(e, id)}
            placeholder="Your tasks on this job"
          />
        </label>
        {/* separate input field visually : START - END YEAR */}
        <label className="duration">
          <input
            name="to"
            value={experienceItem.to}
            onChange={(e) => onChange(e, id)}
            placeholder="to"
            type="number"
          />
          <input
            name="from"
            value={experienceItem.from}
            onChange={(e) => onChange(e, id)}
            placeholder="from"
            type="number"
          />
        </label>
        <div className="delete" onClick={() => onDelete(id)}>Delete</div>
      </fieldset>
    </>
  );
};

export default ExperienceItem;
