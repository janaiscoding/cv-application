import React, { useState } from "react";
import emptyCV from "./emptyCV";
import Resume from "./Resume";

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handlePersonalChange = (e) => {
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return <Resume cv={cv} onChangePersonal={handlePersonalChange} />;
};

export default Main;
