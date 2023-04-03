import React from "react";
import "../utils/styles.css";
import Experience from "./Experience";

class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.creates@gmail.com",
        phoneNumber: "0744 286 175",
      },
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }
  handleChangeFirstName = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        firstName: e.target.value,
      },
    });
  };
  handleChangeLastName = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        lastName: e.target.value,
      },
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        email: e.target.value,
      },
    });
  };
  handleChangePhone = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        phoneNumber: e.target.value,
      },
    });
  };
  
  render() {
    return (
      <>
        <fieldset className="pInfo">
        <legend>This is personal info legend</legend>
          <div className="pInfoFirst">
            <label htmlFor="firstName">First Name </label>
            <input
              value={this.state.personalInfo.firstName}
              onChange={this.handleChangeFirstName}
              placeholder="John"
              required={true}
            />
          </div>
          <div className="pInfoLast">
            <label htmlFor="lastName">Last Name </label>
            <input
              value={this.state.personalInfo.lastName}
              onChange={this.handleChangeLastName}
              placeholder="Doe"
              required={true}
            />
          </div>
          <div className="pInfoEmail">
            <label htmlFor="email">Email </label>
            <input
              value={this.state.personalInfo.email  }
              onChange={this.handleChangeEmail}
              placeholder="meow.meow@cats.meow"
              required={true}
            />
          </div>
          <div className="pInfoPhone">
            <label htmlFor="phone">Phone Number </label>
            <input
              onChange={this.handleChangePhone}
              type="number"
              placeholder="phone nr#"
              required={true}
            />
          </div>
        </fieldset>
        <Experience personalInfo={this.state.personalInfo} />
      </>
    );
  }
}

export default Personal;
