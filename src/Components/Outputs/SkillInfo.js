import React, { Component } from "react";

class SkillInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2>Skills</h2>
                <ul className="skills">
                {this.props.data.skills.map((skill,index)=> {
                        if(skill === "") {
                            return (
                                <div key={index}></div>
                            )
                        } else {
                            return(
                                <li key={index}>
                                    <span >
                                        {skill}
                                    </span>
                                </li>

                                
                            )
                        }
                                
                    })}
                </ul>
            </div>
        )
    }
}


export default SkillInfo;