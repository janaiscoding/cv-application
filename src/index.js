import React from "react";
import ReactDOM from "react-dom/client";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import Resume from "./components/Resume";
import "./utils/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyHeader />
    <Resume />
    <MyFooter />
  </React.StrictMode>
);
