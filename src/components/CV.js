import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Output from "./Output";
import Personal from "./Personal";

class CV extends React.Component {
  render() {
    return (
      <>
        <Personal personalInfo={this.state.personalInfo} />
        <Experience workFields={this.state.workFields} />
        <Education educationFields={this.state.educationFields} />
        <Output />
      </>
    );
  }
}

export default CV;
