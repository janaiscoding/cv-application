import React from "react";

class Output extends React.Component {
  render(props) {
    const { myInfo } = props;
    return (
      <ul>
        {myInfo.map((info) => {
          return <li>{info.text}</li>;
        })}
      </ul>
    );
  }
}

export default Output;

// the class i want to use to render everything as i am typing maybe ? 