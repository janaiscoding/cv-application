import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";

const Resume = ({ cv, onChangePersonal, onChangeExperience }) => {
  return (
    <>
      <div className="main">
        <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
        <Experience experience={cv.experience} onChange={onChangeExperience} />
      </div>
    </>
  );
};

export default Resume;
