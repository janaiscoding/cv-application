import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Personal />
          <Experience />
          <Education />
        </form>
      </div>
    );
  }
}

export default Form;
