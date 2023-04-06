import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const Resume = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onChangeEducation,
}) => {
  return (
    <>
      <div className="main">
        <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
        <Experience experience={cv.experience} onChange={onChangeExperience} />
        <Education education={cv.education} onChange={onChangeEducation} />
      </div>
    </>
  );
};

export default Resume;
