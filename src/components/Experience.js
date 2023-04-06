import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience, onChange, onAdd }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onAdd={onAdd}
    />
  ));
  return (
    <>
      <div>{experienceItems}</div>
    </>
  );
};

export default Experience;
