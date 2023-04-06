import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onAdd={onAdd}
      onDelete={onDelete}
    />
  ));
  return (
    <>
      <div>{experienceItems}</div>
    </>
  );
};

export default Experience;
