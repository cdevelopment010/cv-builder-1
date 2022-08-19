import React, {Component} from "react";
import Inputs from "./Inputs";

class SkillsInput extends Component {
    render() {

        return (
            <div className="inputSection">
                <h3>Skills</h3>
                {this.props.info.skills.map((skill,index)=> {
                       return (
                        <div key={index} className="col">
                            <div className="row">
                                <Inputs  placeholder='Project Name' TextVal={skill} callback={this.props.callback} idVal={`skillInfo-skills-${index}-input`} />
                            </div>
                        </div>
                       ) 
                    })}
                    <button type="button" onClick={this.props.newField} id='skillInfo-skills-btn'>Click me!</button>
            </div>
        )
    }
}

export default SkillsInput;