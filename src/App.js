import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.isLoggedIn = false;
    this.state = {
      name: "Jana",
      age: 25,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        <h1>You are currently logged {this.isLoggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App;
