import React from "react";
import "../utils/experience.css";
import Output from "./Output";

class Experience extends React.Component {
  constructor(props) {
    const { personalInfo } = props;
    super(props);
    this.state = {
      personalInfo,
      workFields: [
        {
          companyName: "Awesome Company",
          position: "Junior Developer",
          mainTasks: "Had to be extra nice",
          startingYearJob: "2021",
          endingYearJob: "2022",
        },
        {
          companyName: "Awesome Company2",
          position: "Junior Developer2",
          mainTasks: "Had to be extra nice2",
          startingYearJob: "2022",
          endingYearJob: "2025",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (i, e) => {
    let workFields = this.state.workFields;
    workFields[i][e.target.id] = e.target.value;
    this.setState({ workFields });
  };
  render() {
    return (
      <>
        <fieldset>
          <legend>This is exp legend</legend>
          {this.state.workFields.map((el, i) => {
            return (
              <div className="work-field" key={-i}>
                {/* group for company name */}
                <div className="work-form-group">
                  <label htmlFor="companyName">Company Name: </label>
                  <input
                    onChange={(e) => this.handleChange(i, e)}
                    value={el.companyName || ""}
                    id="companyName"
                    placeholder="Your Company Name"
                  />
                </div>
                {/* group for position name */}
                <div className="work-form-group">
                  <label htmlFor="position">Position: </label>
                  <input
                    onChange={(e) => this.handleChange(i, e)}
                    value={el.position || ""}
                    id="position"
                    placeholder="Your Position Name"
                  />
                </div>
                {/* group for job tasks */}
                <div className="work-form-group">
                  <label htmlFor="mainTasks">Your Main Tasks: </label>
                  <input
                    onChange={(e) => this.handleChange(i, e)}
                    value={el.mainTasks || ""}
                    id="mainTasks"
                    placeholder="Your Main Tasks"
                  />
                </div>
                {/* group for starting year*/}
                <div className="work-form-group">
                  <label htmlFor="startingYearJob">Starting Year: </label>
                  <input
                    onChange={(e) => this.handleChange(i, e)}
                    type="date"
                    value={el.startingYearJob || ""}
                    id="startingYearJob"
                    placeholder="Your Starting Year"
                  />
                </div>
                {/* group for ending year*/}
                <div className="work-form-group">
                  <label htmlFor="endingYearJob">Ending Year: </label>
                  <input
                    onChange={(e) => this.handleChange(i, e)}
                    type="date"
                    value={el.endingYearJob || ""}
                    id="endingYearJob"
                    placeholder="Your Ending Year"
                  />
                </div>
              </div>
            );
          })}
        </fieldset>
        <Output
          personalInfo={this.state.personalInfo}
          workFields={this.state.workFields}
        />
      </>
    );
  }
}
export default Experience;
