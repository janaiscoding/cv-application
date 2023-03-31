import React from "react";
import Personal from "./Personal"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showOutput: true,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Personal />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
