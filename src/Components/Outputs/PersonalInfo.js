import React, { Component } from "react";

class PersonalInfo extends Component {

    render() {
        return (
            <div className="PersonalInfo">
                <div className="header p-3 mb-2">
                    <div className="">
                        <h1 className="pb-2">{this.props.data.name}</h1>
                        <p>{this.props.data.phone}</p>
                        <p>{this.props.data.email}</p>
                    </div>
                    <div className="align-right">
                        {this.props.data.websiteCount.map((site,index)=> {
                                return <div key={site}><a  href={'https://'+site} target="_blank" rel="noreferrer">{site}</a></div>
                        })}
                    </div>
                    </div>
                <div class="about m-2 mr-3">
                    <h2>About Me</h2>
                    <p>{this.props.data.about}</p>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;