import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workFields: [
        {
          companyName: "Awesome Company",
          position: "Junior Developer",
          mainTasks: "Had to be extra nice",
          startingYearJob: "2021",
          endingYearJob: "2022",
        },
        {
            companyName: "Awesome Company2",
            position: "Junior Developer2",
            mainTasks: "Had to be extra nice2",
            startingYearJob: "2022",
            endingYearJob: "2025",
          },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (i, e) => {
    let workFields = this.state.workFields;
    workFields[i][e.target.id] = e.target.value;
    this.setState({ workFields });
  };
  render() {
    return (
      <>
        <fieldset>
          <legend>This is exp legend</legend>
          {this.state.workFields.map((el, i) => {
            return (
              <div className="work-field" key={-i}>
                <label htmlFor="companyName">Company Name:</label>
                <input
                  onChange={(e) => this.handleChange(i, e)}
                  value={el.companyName || ""}
                  id="companyName"
                  placeholder="Your Company Name"
                />
              </div>
            );
          })}
        </fieldset>
      </>
    );
  }

  //     return (
  //       <>
  //         <fieldset className="expInfo">
  //           <div className="expComp">
  //             <label htmlFor="companyName">Company Name:</label>
  //             <input
  //               onChange={this.handleChange}
  //               id="companyName"
  //               plHldr="Awesome Company"
  //             />
  //           </div>
  //           <div className="expPos">
  //             <label htmlFor="position">Position:</label>
  //             <Input
  //               onChange={this.handleChange}
  //               id="position"
  //               plHldr="Junior Developer"
  //             />
  //           </div>
  //           <div className="expTasks">
  //             <label htmlFor="mainTasks">Main Tasks:</label>
  //             <Input
  //               onChange={this.handleChange}
  //               id="mainTasks"
  //               plHldr="Had to be extra nice.."
  //             />
  //           </div>
  //           <div className="expStart">
  //             <label htmlFor="startingYearJob">Starting year:</label>
  //             <Input
  //               onChange={this.handleChange}
  //               id="startingYearJob"
  //               type="date"
  //               plHldr="2020"
  //             />
  //           </div>
  //           <div className="expEnd">
  //             <label htmlFor="endingYearJob">Ending year:</label>
  //             <Input
  //               onChange={this.handleChange}
  //               type="date"
  //               plHldr="2025"
  //               id="endingYearJob"
  //             />
  //           </div>
  //         </fieldset>
  //       </>
  //     );
  //   }
}
export default Experience;
