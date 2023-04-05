import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const Resume = () => {
  return (
    <>
      <div className="main">
        <Personal />
        <Experience />
        <button>Add</button>
        <Education />
        <button>Add</button>
      </div>
    </>
  );
};

export default Resume;
