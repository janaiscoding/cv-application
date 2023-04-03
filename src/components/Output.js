import React from "react";
import "../utils/output.css";
import uniqid from "uniqid";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.renderWork = this.renderWork.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
  }

  renderWork(workFields) {
    return workFields.map((work) => {
      return (
        <div className="work-singular-item" key={uniqid()}>
          <p className="company-name">{work.companyName}</p>
          <p className="work-position">{work.position}</p>
          <p className="main-tasks">{work.mainTasks}</p>
          <p className="date">
            {work.startingYearJob} - {work.endingYearJob}{" "}
          </p>
        </div>
      );
    });
  }
  renderEducation(educationFields) {
    return educationFields.map((education) => {
      return (
        <div className="education-singular-item" key={uniqid()}>
          <p className="school-name">{education.schoolName}</p>
          <p className="degree-title">{education.degreeTitle}</p>
          <p className="date">{education.graduationDate}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="output-screen">
        {/* container with all the personal info to display */}
        <div className="personal-info-container">
          <h3>Personal Information</h3>
          <div>First Name: {this.props.personalInfo.firstName}</div>
          <div>Last Name: {this.props.personalInfo.lastName}</div>
          <div>Email: {this.props.personalInfo.email}</div>
          <div>Phone number: {this.props.personalInfo.phoneNumber}</div>
        </div>
        {/* container with all the job info to display */}
        <div className="work-info-container">
          {this.props.workFields.length > 0 ? <h3>Work Experience</h3> : ""}
          <div className="work-container-items">
            {this.renderWork(this.props.workFields)}
          </div>
        </div>
        {/* container with all the education info to display */}
        <div className="education-info-container">
          {this.props.educationFields.length > 0 ? <h3>Education</h3> : ""}
          <div className="education-container-items">
            {this.renderEducation(this.props.educationFields)}
          </div>
        </div>
      </div>
    );
  }
}

export default Output;

// the class i want to use to render everything as i am typing maybe ?
