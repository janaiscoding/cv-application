import React from "react";
// import Buttons from "./Buttons";
// import Education from "./Education";
// import Experience from "./Experience";
import Personal from "./Personal";


class App extends React.Component {
  render() {
    return (
      <>
        <form>
          <legend>Enter Your CV Information:</legend>
          <Personal />
        </form>
      </>
    );
  }
}

export default App;
