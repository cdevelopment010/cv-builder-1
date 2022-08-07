import React, {Component} from "react";
import Inputs from "./Inputs";

class NameArea extends Component {
    constructor(props) {
        super(props); 
    }

    render() {

        return (
            <div className="inputSection">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <Inputs placeholder='Name' TextVal = {this.props.info.name} callback={this.props.callback} idVal={'personalInfo-name-input'}/>
                            <Inputs placeholder='Email' type='Email' TextVal = {this.props.info.Email} callback={this.props.callback} idVal={'personalInfo-email-input'}/>
                            <Inputs placeholder='Phone' TextVal = {this.props.info.Phone} callback={this.props.callback} idVal={'personalInfo-phone-input'}/>

                        </div>
                        <div className="row">
                            {this.props.info.websiteCount.map((site,index)=> {
                            return <Inputs key={site} placeholder='Website link'/>
                            })}
                            <button type="button" onClick={this.props.newField} id='personalInfo-websiteCount-btn'>Click me!</button>
                        </div>
                        <div className="row">
                            <Inputs placeholder='Summary/About'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameArea;