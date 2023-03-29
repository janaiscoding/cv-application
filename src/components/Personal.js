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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      email: e.target.value,
      phoneNumber: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="personal-info">
        <Title sectionTitle="Personal Information" />
        <Input title="firstName" type="text" placeholder="First Name" />
        <Input title="lastName" type="text" placeholder="Last Name" />
        <Input title="email" type="text" placeholder="Email" />
        <Input title="phoneNumber" type="number" placeholder="Phone number" />
      </div>
    );
  }
}

export default Personal;
