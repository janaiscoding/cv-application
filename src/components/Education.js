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
      {educationItems}
      <button onClick={onAdd}>Add Education</button>
    </>
  );
};

export default Education;
