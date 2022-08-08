import React, {Component} from "react";
import Inputs from "./Inputs";

class EducationInputs extends Component {
    render() {

        return (
            <div className="inputSection">
                <h3>Education</h3>
                {this.props.info.institute.map((ed,index)=> {
                       return (
                        <div key={index} className="col">
                            <div className="row">
                                <Inputs  placeholder='School/University' TextVal={ed.school} callback={this.props.callback} idVal={`educationInfo-institute-${index}-school-input`} />
                                <Inputs  placeholder='From:' TextVal={ed.from} callback={this.props.callback} idVal={`educationInfo-institute-${index}-from-input`}/>
                                <Inputs  placeholder='To:' TextVal={ed.to} callback={this.props.callback} idVal={`educationInfo-institute-${index}-to-input`}/>
                                <Inputs  placeholder='Grade' TextVal={ed.grade} callback={this.props.callback} idVal={`educationInfo-institute-${index}-grade-input`}/>
                            </div>
                            <div className="row">
                                <Inputs  placeholder='Area of study' TextVal={ed.areaStudy} callback={this.props.callback} idVal={`educationInfo-institute-${index}-areaStudy-input`}/>
                                <Inputs  placeholder='Overview (optional)' type="TextArea" TextVal={ed.overview} callback={this.props.callback} idVal={`educationInfo-institute-${index}-overview-input`}/>
                            </div>

                        </div>
                       ) 
                    })}
                    <button type="button" onClick={this.props.newField} id='educationInfo-institute-btn'>Click me!</button>
            </div>
        )
    }
}

export default EducationInputs;