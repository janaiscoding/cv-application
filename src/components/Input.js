import React from "react";
class Input extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChange} //handle the typing
        type={this.props.type || "text"} // either text or number
        placeholder={this.props.plHldr} // just the placeholder html attribute
      />
    );
  }
}

export default Input;
