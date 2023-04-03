import React from "react";
import Output from "./Output";

class Education extends React.Component {
  constructor(props) {
    const { personalInfo, workFields } = props;
    super(props);
    this.state = {
      personalInfo,
      workFields,
      educationFields: [
        {
          schoolName: "college of being awesome",
          degreeTitle: "bachelor's degree",
          graduationDate: "2020",
        },
      ],
    };  
  }

  render() {
    return (
      <>


        
        <Output
          personalInfo={this.state.personalInfo}
          workFields={this.state.workFields}
          educationFields={this.state.educationFields}
        />
      </>
    );
  }
}
export default Education;
