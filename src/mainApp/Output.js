import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.renderExperience = this.renderExperience.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
  }
  renderExperience(experience) {
    return experience.map((experienceItem) => {
      return (
        <div className="experience-wrap" key={experienceItem.id}>
          <p className="company">{experienceItem.company}</p>
          <p className="position">Position</p>
          <p>{experienceItem.position}</p>
          <p className="tasks">Tasks</p>
          <p>{experienceItem.tasks}</p>
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
        <div className="education-wrap" key={educationItem.id}>
          <p className="school">{educationItem.school}</p>
          <p className="degree">{educationItem.degree}</p>
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
        <div className="title title-wrapper"> Personal CV </div>
        {/* container with all the personal info to display */}
        <div className="output-personal">
          <div className="personal-wrap">
            <div className="name">
              {this.props.personalInfo.firstName}{" "}
              {this.props.personalInfo.lastName}
            </div>
            <div className="email">Email: {this.props.personalInfo.email}</div>
            <div className="phone-number">
              Phone Number: {this.props.personalInfo.phoneNumber}
            </div>
          </div>
        </div>
        {/* container with all the job info to display */}
        <div className="title title-wrapper">Experience</div>
        <div className="output-experience">
          {this.renderExperience(this.props.experience)}
        </div>
        {/* container with all the education info to display */}
        <div className="title title-wrapper">Education</div>
        <div className="output-education">
          {this.renderEducation(this.props.education)}
        </div>
      </div>
    );
  }
}

export default Output;
