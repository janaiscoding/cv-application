import React from "react";
import ReactDOM from "react-dom/client";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Personal />
      <Experience />
      <Education />
  </React.StrictMode>
);
