import React from "react";

class Output extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>{this.props.personalInfo.firstName}</div>
        <div>{this.props.personalInfo.lastName}</div>
        <div>{this.props.personalInfo.email}</div>
        <div>{this.props.personalInfo.phoneNumber}</div>
      </>
    );
  }
}

export default Output;

// the class i want to use to render everything as i am typing maybe ?
