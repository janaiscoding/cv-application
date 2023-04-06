import React from "react";
// here i gotta map the arrays
// also create the whole layout
class Output extends React.Component {
  constructor(props) {
    super(props);
    this.renderExperience = this.renderExperience.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
  }
  renderExperience(experience) {
    return experience.map((experienceItem) => {
      return (
        <div className="work-singular-item" key={experienceItem.id}>
          <p className="company-name">{experienceItem.company}</p>
          <p className="work-position">{experienceItem.position}</p>
          <p className="main-tasks">{experienceItem.tasks}</p>
          <p className="date">
            {experienceItem.to} - {experienceItem.from}{" "}
          </p>
        </div>
      );
    });
  }
  renderEducation(education) {
    return education.map((educationItem) => {
      return (
        <div className="education-singular-item" key={educationItem.id}>
          <p className="school-name">{educationItem.school}</p>
          <p className="degree-title">{educationItem.degree}</p>
          <p className="date">
            {educationItem.to} -{educationItem.from}{" "}
          </p>
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
          {this.props.experience.length > 0 ? <h3>Work Experience</h3> : ""}
          <div className="work-container-items">
            {this.renderExperience(this.props.experience)}
          </div>
        </div>
        {/* container with all the education info to display */}
        <div className="education-info-container">
          {this.props.education.length > 0 ? <h3>Education</h3> : ""}
          <div className="education-container-items">
            {this.renderEducation(this.props.education)}
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
