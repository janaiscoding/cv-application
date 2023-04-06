import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ education, onChange }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
    />
  ));
  return (
    <>
      <div>{educationItems}</div>
    </>
  );
};

export default Education;
