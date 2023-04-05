import React from "react";
import Output from "./Output";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@fake.mail",
        phoneNumber: "0123 456 789",
      },
      educationFields: [
        {
          schoolName: "Engineering",
          degreeTitle: "Bachelor's Degree",
          graduationDate: "2020",
        },
      ],
      workFields: [
        {
          companyName: "Awesome Company",
          position: "Junior Developer",
          mainTasks: "Creating beautiful responsive websites",
          startingYearJob: "2021",
          endingYearJob: "2022",
        },
      ],
    };
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);

    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleRemoveEdu = this.handleRemoveEdu.bind(this);

    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleRemoveWork = this.handleRemoveWork.bind(this);
  }

  handleChangePersonal = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.id]: e.target.value,
      },
    });
  };
  handleEduChange = (i, e) => {
    let educationFields = this.state.educationFields;
    educationFields[i][e.target.id] = e.target.value;
    this.setState({ educationFields });
  };
  handleWorkChange = (i, e) => {
    let workFields = this.state.workFields;
    workFields[i][e.target.id] = e.target.value;
    this.setState({ workFields });
  };

  handleAddEdu() {
    this.setState({
      educationFields: [
        ...this.state.educationFields,
        {
          schoolName: "",
          degreeTitle: "",
          graduationDate: "",
        },
      ],
    });
  }
  handleRemoveEdu(i) {
    let educationFields = this.state.educationFields;
    educationFields.splice(i, 1);
    this.setState({ educationFields });
  }
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
      <div className="main">
        <div className="resume">
          <fieldset className="personal-info-fields">
            <legend>This is personal info legend</legend>
            <div className="pInfoFirst">
              <label htmlFor="firstName">First Name </label>
              <input
                id="firstName"
                value={this.state.personalInfo.firstName}
                onChange={this.handleChangePersonal}
                placeholder="John"
                required={true}
              />
            </div>
            <div className="pInfoLast">
              <label htmlFor="lastName">Last Name </label>
              <input
                id="lastName"
                value={this.state.personalInfo.lastName}
                onChange={this.handleChangePersonal}
                placeholder="Doe"
                required={true}
              />
            </div>
            <div className="pInfoEmail">
              <label htmlFor="email">Email </label>
              <input
                id="email"
                value={this.state.personalInfo.email}
                onChange={this.handleChangePersonal}
                placeholder="meow.meow@cats.meow"
                required={true}
              />
            </div>
            <div className="pInfoPhone">
              <label htmlFor="phone">Phone Number </label>
              <input
                id="phoneNumber"
                onChange={this.handleChangePersonal}
                type="number"
                placeholder="0123 456 789"
                required={true}
              />
            </div>
          </fieldset>
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
                  <button onClick={() => this.handleRemoveWork(i)}>
                    Delete
                  </button>
                </div>
              );
            })}
            <button onClick={this.handleAddWork}>Add</button>
          </fieldset>
          <fieldset className="education-info-fields">
            <legend>This is education legend</legend>
            {this.state.educationFields.map((el, i) => {
              return (
                <div className="education-field" key={i}>
                  {/* group for company name */}
                  <div className="education-form-group">
                    <label htmlFor="schoolName">School Name: </label>
                    <input
                      onChange={(e) => this.handleEduChange(i, e)}
                      value={el.schoolName || ""}
                      id="schoolName"
                      placeholder="Your School Name"
                    />
                  </div>
                  {/* group for position name */}
                  <div className="education-form-group">
                    <label htmlFor="degreeTitle">Degree Title: </label>
                    <input
                      onChange={(e) => this.handleEduChange(i, e)}
                      value={el.degreeTitle || ""}
                      id="degreeTitle"
                      placeholder="Your Degree Title"
                    />
                  </div>
                  {/* group for job tasks */}
                  <div className="education-form-group">
                    <label htmlFor="graduationDate">Graduation Date: </label>
                    <input
                      onChange={(e) => this.handleEduChange(i, e)}
                      value={el.graduationDate || ""}
                      id="graduationDate"
                      type="number"
                      placeholder="YYYY"
                    />
                  </div>
                  <button onClick={() => this.handleRemoveEdu(i)}>
                    Delete
                  </button>
                </div>
              );
            })}
            <button onClick={this.handleAddEdu}>Add</button>
          </fieldset>
        </div>
        <Output
          personalInfo={this.state.personalInfo}
          educationFields={this.state.educationFields}
          workFields={this.state.workFields}
        />
      </div>
    );
  }
}

export default Resume;
