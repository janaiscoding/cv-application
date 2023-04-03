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
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
  }

  handleChangePersonal = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.id]: e.target.value,
      },
    });
  };
  render() {
    console.log(this.state.personalInfo);

    return (
      <>
        <fieldset className="pInfo">
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
              id="phone"
              onChange={this.handleChangePersonal}
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
