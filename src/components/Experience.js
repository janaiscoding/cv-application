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
  return (
    <>
      <div className="title-wrapper">
        <div className="title">Your Experience</div>
        <div className="add" onClick={onAdd}>Add</div>
      </div>
      <div className="experience">{experienceItems}</div>
    </>
  );
};

export default Experience;
