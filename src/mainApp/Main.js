import React, { useState } from "react";
import emptyCV from "./emptyCV";
import Resume from "./Resume";
import uniqid from "uniqid";

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

  const handleChangeEducation = (e, id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [e.target.name]: e.target.value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };
  const handleAddEducation = () => {
    setCv((prevState) => {
      return {
        ...prevState,
        education: [
          ...prevState.education,
          {
            id: uniqid(),
            school: "",
            degree: "",
            to: "",
            from: "",
          },
        ],
      };
    });
  };
  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };
  const handleAddExperience = () => {
    setCv((prevState) => {
      return {
        ...prevState,
        experience: [
          ...prevState.experience,
          {
            id: uniqid(),
            position: "",
            company: "",
            tasks: "",
            to: "",
            from: "",
          },
        ],
      };
    });
  };
  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };
  return (
    <Resume
      cv={cv}
      onChangePersonal={handlePersonalChange}
      onChangeExperience={handleExperienceChange}
      onChangeEducation={handleChangeEducation}
      onAddEducation={handleAddEducation}
      onDeleteEducation={handleDeleteEducation}
      onAddExperience={handleAddExperience}
      onDeleteExperience={handleDeleteExperience}
    />
  );
};

export default Main;
