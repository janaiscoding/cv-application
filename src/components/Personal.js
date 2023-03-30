import React from "react";
import Input from "./Input";
import "../styles/personal.css";
import Title from "./Title";

class Personal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="personal-info">
        <Title sectionTitle="Personal Information" />
        <form onSubmit={this.handleSubmit}>
          <Input
            onChangeEvent={this.handleFirstName}
            placeholder="First Name"
          />
          <Input onChangeEvent={this.handleLastName} placeholder="Last Name" />
          <Input onChangeEvent={this.handleEmail} placeholder="Email" />
          <Input
            onChangeEvent={this.handlePhoneNumber}
            type="number"
            placeholder="Phone number"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Personal;
