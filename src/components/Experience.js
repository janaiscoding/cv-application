import React, { useState } from "react";

const Experience = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  return (
    <>
      <fieldset className="experience">
        {/* separate input field visually : COMPANY NAME  */}
        <label>
          Company Name
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
            required={true}
          />
        </label>
        {/* separate input field visually : POSITION  */}
        <label>
          Position
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
            required={true}
          />
        </label>
        {/* separate input field visually : MAIN TASKS  */}
        <label>
          Main Tasks
          <input
            value={mainTasks}
            onChange={(e) => setMainTasks(e.target.value)}
            placeholder="Your tasks on this job"
            required={true}
          />
        </label>
        {/* separate input field visually : START YEAR */}
        <label>
          Starting Year
          <input
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            placeholder="YYYY"
            pattern="[0-9]{4}"
            type="number"
            required={true}
          />
        </label>
        {/* separate input field visually : END YEAR */}
        <label>
          Ending Year
          <input
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            placeholder="YYYY"
            pattern="[0-9]{4}"
            type="number"
            required={true}
          />
        </label>
      </fieldset>
    </>
  );
};

export default Experience;
