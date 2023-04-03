import React from "react";
import Output from "./Output";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationFields: [
        {
          schoolName: "college of being awesome",
          degreeTitle: "bachelor's degree",
          graduationDate: "2020",
        },
      ],
    };
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleRemoveEdu = this.handleRemoveEdu.bind(this);
  }
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
  handleEduChange = (i, e) => {
    let educationFields = this.state.educationFields;
    educationFields[i][e.target.id] = e.target.value;
    this.setState({ educationFields });
  };

  render() {
    return (
      <>
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
                  Remove this education
                </button>
              </div>
            );
          })}
          <button onClick={this.handleAddEdu}>Add</button>
        </fieldset>
        <Output
          personalInfo={this.props.personalInfo}
          workFields={this.props.workFields}
          educationFields={this.state.educationFields}
        />
      </>
    );
  }
}
export default Education;
