import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return (
    <>
      <div className="title-wrapper">
        <div className="title">Your Education</div>
        <div className="add" onClick={onAdd}>
          Add
        </div>
      </div>
      <div className="education">{educationItems}</div>
    </>
  );
};

export default Education;
