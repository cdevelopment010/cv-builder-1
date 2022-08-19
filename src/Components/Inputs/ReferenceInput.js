import React, {Component} from "react";
import Inputs from "./Inputs";

class ReferenceInput extends Component {
    render() {

        return (
            <div className="inputSection">
                <h3>References</h3>
                {this.props.info.reference.map((ref,index)=> {
                       return (
                        <div key={index} className="col">
                            <div className="row">
                                <Inputs  placeholder='Name' TextVal={ref.name} callback={this.props.callback} idVal={`referenceInfo-reference-${index}-name-input`} />
                                <Inputs  placeholder='Email' type='Email' TextVal={ref.email} callback={this.props.callback} idVal={`referenceInfo-reference-${index}-email-input`} />
                                <Inputs  placeholder='Phone' TextVal={ref.phone} callback={this.props.callback} idVal={`referenceInfo-reference-${index}-phone-input`} />
                            </div>
                        </div>
                       ) 
                    })}
                    <button type="button" onClick={this.props.newField} id='referenceInfo-reference-btn'>Click me!</button>
            </div>
        )
    }
}

export default ReferenceInput;