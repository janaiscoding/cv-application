import React from "react";
import "../utils/output.css";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <>
        <div className="output-personal-info">
          <div>First Name: {this.props.personalInfo.firstName}</div>
          <div>Last Name: {this.props.personalInfo.lastName}</div>
          <div>Email: {this.props.personalInfo.email}</div>
          <div>Phone number: {this.props.personalInfo.phoneNumber}</div>
        </div>
      </>
    );
  }
}

export default Output;

// the class i want to use to render everything as i am typing maybe ?
