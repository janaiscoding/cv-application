import React from "react";
class Input extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChangeEvent}
        type={this.props.type}
        id={this.props.title}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
