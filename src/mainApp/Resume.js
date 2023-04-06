import React from "react";
import Personal from "../components/Personal";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Output from "./Output";

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
      <div className="main-form">
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
      <Output
        personalInfo={cv.personalInfo}
        experience={cv.experience}
        education={cv.education}
      />
    </div>
  );
};

export default Resume;
