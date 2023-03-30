import React from "react";

class Title extends React.Component {
  render() {
    return <div className="title">Section for {this.props.name}</div>;
  }
}

export default Title;
