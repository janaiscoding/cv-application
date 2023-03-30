import React from "react";
import ReactDOM from "react-dom/client";
import Output from "./components/Output";
import Personal from "./components/Personal";
// import Title from "./components/Title";
// import Experience from "./components/Experience";
// import Education from "./components/Education";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Personal />
    <Output />
    {/* <Experience />
      <Education /> */}
  </React.StrictMode>
);
