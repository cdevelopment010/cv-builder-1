import React, { Component } from "react";

class PersonalInfo extends Component {

    render() {
        return (
            <div>
                <div className="col-2">
                    <div className="left">
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.phone}</p>
                        <p>{this.props.data.email}</p>
                    </div>
                    <div className="right">
                        {this.props.data.websiteCount.map((site,index)=> {
                                return <a key={site} href={'https://'+site} target="_blank">{site}</a>
                        })}
                    </div>
                    </div>
                <div>
                    <p>{this.props.data.about}</p>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;