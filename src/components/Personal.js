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
      showOutput: false,
    };
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirst = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLast = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showOutput: true,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="personal-info">
        <Title name="Personal Information" />
          <Input onChange={this.handleFirst} plHldr="John" />
          <Input onChange={this.handleLast} plHldr="Doe" />
          <Input onChange={this.handleEmail} plHldr="a@b.c" />
          <Input onChange={this.handlePhone} type="number" plHldr="Phone" />
      </div>
    );
  }
}

export default Personal;
