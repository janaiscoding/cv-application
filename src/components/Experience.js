import React from "react";
import Input from "./Input";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      workFields: [
        {
          companyName: "Awesome Company",
          position: "Junior Developer",
          mainTasks: "Had to be extra nice",
          startingYearJob: "2021",
          endingYearJob: "2025",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <fieldset className="expInfo">
          <div className="expComp">
            <label htmlFor="companyName">Company Name:</label>
            <Input
              onChange={this.handleChange}
              id="companyName"
              plHldr="Awesome Company"
            />
          </div>
          <div className="expPos">
            <label htmlFor="position">Position:</label>
            <Input
              onChange={this.handleChange}
              id="position"
              plHldr="Junior Developer"
            />
          </div>
          <div className="expTasks">
            <label htmlFor="mainTasks">Main Tasks:</label>
            <Input
              onChange={this.handleChange}
              id="mainTasks"
              plHldr="Had to be extra nice.."
            />
          </div>
          <div className="expStart">
            <label htmlFor="startingYearJob">Starting year:</label>
            <Input
              onChange={this.handleChange}
              id="startingYearJob"
              type="date"
              plHldr="2020"
            />
          </div>
          <div className="expEnd">
            <label htmlFor="endingYearJob">Ending year:</label>
            <Input
              onChange={this.handleChange}
              type="date"
              plHldr="2025"
              id="endingYearJob"
            />
          </div>
        </fieldset>
      </>
    );
  }
}
export default Experience;
