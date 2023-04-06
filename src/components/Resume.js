import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const Resume = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onAddExperience,
  onDeleteExperience,
}) => {
  return (
    <div className="main">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
    </div>
  );
};

export default Resume;
