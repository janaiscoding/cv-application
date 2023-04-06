import React, { useState } from "react";
import emptyCV from "./emptyCV";
import Resume from "./Resume";

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handlePersonalChange = (e) => {
    //inside here i can just simply change each pair of (key: value) inside the personalInfo object
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleExperienceChange = (e, id) => {
    //target e + id
    setCv((prevState) => {
      //take initial cv
      const newExperience = prevState.experience.map((experienceItem) => {
        // map through exp array and if id is found
        if (experienceItem.id === id) {
          // return the exp object with changed value on event
          return { ...experienceItem, [e.target.name]: e.target.value };
        }
        //if not found, simply return it
        return experienceItem;
      });
      // sets the new prev state to the newly changed one
      return { ...prevState, experience: [...newExperience] };
    });
  };
  return (
    <Resume
      cv={cv}
      onChangePersonal={handlePersonalChange}
      onChangeExperience={handleExperienceChange}
    />
  );
};

export default Main;
