import React from "react";
import Title from "./Title";
import Input from "./Input";


class Education extends React.Component {
    render(){
        return(
            <div>
            <Title sectionTitle="Education" />
            <Input title="education" type="text" placeholder="Your Education" />
            </div>
        )
    }
}
export default Education;
