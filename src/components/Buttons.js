import React from "react";
import Output from "./Output";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <button type="Submit">Submit CV</button>
        <button>Edit CV</button>
        <Output />
      </>
    );
  }
}

export default Buttons