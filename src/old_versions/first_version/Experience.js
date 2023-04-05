import React from "react";
import "../utils/experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleRemoveWork = this.handleRemoveWork.bind(this);
  }

  handleWorkChange = (i, e) => {
    let workFields = this.state.workFields;
    workFields[i][e.target.id] = e.target.value;
    this.setState({ workFields });
  };
  handleAddWork() {
    this.setState({
      workFields: [
        ...this.state.workFields,
        {
          companyName: "",
          position: "",
          mainTasks: "",
          startingYearJob: "",
          endingYearJob: "",
        },
      ],
    });
  }
  handleRemoveWork(i) {
    let workFields = this.state.workFields;
    workFields.splice(i, 1);
    this.setState({ workFields });
  }

  render() {
    return (
      <>
        <fieldset className="experience-info-fields">
          <legend>This is exp legend</legend>
          {this.state.workFields.map((el, i) => {
            return (
              <div className="work-field" key={-i}>
                {/* group for company name */}
                <div className="work-form-group">
                  <label htmlFor="companyName">Company Name: </label>
                  <input
                    onChange={(e) => this.handleWorkChange(i, e)}
                    value={el.companyName || ""}
                    id="companyName"
                    placeholder="Your Company Name"
                  />
                </div>
                {/* group for position name */}
                <div className="work-form-group">
                  <label htmlFor="position">Position: </label>
                  <input
                    onChange={(e) => this.handleWorkChange(i, e)}
                    value={el.position || ""}
                    id="position"
                    placeholder="Your Position Name"
                  />
                </div>
                {/* group for job tasks */}
                <div className="work-form-group">
                  <label htmlFor="mainTasks">Your Main Tasks: </label>
                  <input
                    onChange={(e) => this.handleWorkChange(i, e)}
                    value={el.mainTasks || ""}
                    id="mainTasks"
                    placeholder="Your Main Tasks"
                  />
                </div>
                {/* group for starting year*/}
                <div className="work-form-group">
                  <label htmlFor="startingYearJob">Starting Year: </label>
                  <input
                    onChange={(e) => this.handleWorkChange(i, e)}
                    value={el.startingYearJob || ""}
                    id="startingYearJob"
                    type="number"
                    placeholder="YYYY"
                  />
                </div>
                {/* group for ending year*/}
                <div className="work-form-group">
                  <label htmlFor="endingYearJob">Ending Year: </label>
                  <input
                    onChange={(e) => this.handleWorkChange(i, e)}
                    value={el.endingYearJob || ""}
                    type="number"
                    id="endingYearJob"
                    placeholder="YYYY"
                  />
                </div>
                <button onClick={()=>this.handleRemoveWork(i)}>Remove this job</button>
              </div>
            );
          })}
          <button onClick={this.handleAddWork}>Add</button>
        </fieldset>
      </>
    );
  }
}
export default Experience;
