import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return <>
  {experienceItems}
  <button onClick={onAdd}>Add Experience</button>
  </>;
};

export default Experience;
