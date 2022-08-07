import React, {Component} from "react";
import Inputs from "./Inputs";

class EducationInputs extends Component {
    constructor() {
        super(); 

        this.state = {
            count: [1]
        }

        this.addEducation = this.addEducation.bind(this);
    }

    addEducation() {
        let cnt = this.state.count; 
        cnt.push(cnt.lenght + 1);
        this.setState({count: cnt})
    }

    render() {

        return (
            <div className="inputSection">
                {this.state.count.map((site,index)=> {
                       return (
                        <div key={site} className="col">
                            <div className="row">
                                <Inputs  placeholder='School/University'/>
                                <Inputs  placeholder='From:'/>
                                <Inputs  placeholder='To:'/>
                                <Inputs  placeholder='Grade'/>
                            </div>
                            <div className="row">
                                <Inputs  placeholder='Area of study'/>
                                <Inputs  placeholder='Overview (optional)'/>
                            </div>

                            <button type="button" onClick={this.addEducation}>Click me!</button>
                        </div>
                       ) 
                    })}
            </div>
        )
    }
}

export default EducationInputs;