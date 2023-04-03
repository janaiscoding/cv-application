import React from "react";
class Input extends React.Component {
  render() {
    return (
      <>
        <input
          id={this.props.id}
          onChange={this.props.onChange} //handle the typing
          type={this.props.type || "text"} // either text or number
          placeholder={this.props.plHldr} // just the placeholder html attribute
         // required={true}
          pattern={this.props.myPattern}
        />
      </>
    );
  }
}

export default Input;
