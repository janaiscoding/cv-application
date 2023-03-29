import React from "react";
import Title from "./Title";
import Input from "./Input";

class Experience extends React.Component{
    render(){
        return(
            <div>
            <Title sectionTitle="Experience" />
            <Input title="experience" type="text" placeholder="Your Experience" />
            </div>
        )
    }
}
export default Experience;