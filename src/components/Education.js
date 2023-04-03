import React from "react";
import Input from "./Input";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      educationFields: [
        {
          schoolName: "college of being awesome",
          degreeTitle: "bachelor's degree",
          graduationDate: "2020",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState((prevState) => ({}));
  };
  render() {
    return (
      <>
        <fieldset className="eduInfo">
          <div className="eduInfoSchool">
            <label htmlFor="schoolName">School Name:</label>
            <Input
              onChange={(e) => this.handleChange(0, e)}
              plHldr="School Name"
              id="schoolName"
            />
          </div>
          <div className="eduInfoDegree">
            <label htmlFor="degreeTitle">Degree Title:</label>
            <Input
              onChange={(e) => this.handleChange(0, e)}
              plHldr="Bachelor's"
              id="degreeTitle"
            />
          </div>
          <div className="eduInfoDate">
            <label htmlFor="graduationDate">Graduation Date:</label>
            <Input
              onChange={(e) => this.handleChange(0, e)}
              type="date"
              plHldr="2020"
              id="graduationDate"
            />
          </div>
        </fieldset>
      </>
    );
  }
}
export default Education;
