import React from "react";
import Personal from "./Personal";

const Resume = ({ cv, onChangePersonal }) => {
  return (
    <>
      <div className="main">
        <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      </div>
    </>
  );
};

export default Resume;
