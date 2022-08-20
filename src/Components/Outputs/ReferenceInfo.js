import React, { Component } from "react";

class ReferenceInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2>References</h2>
                <div className="references">
                {this.props.data.reference.map((ref,index)=> {
                                return(
                                    <div key={index} >
                                        <div className="ref">
                                            <span><h4>{ref.name}</h4></span>
                                            <span>{ref.email}</span>
                                            <span>{ref.phone}</span>
                                        </div>
                                    </div>
                                    
                                )
                        })}
                </div>
            </div>
        )
    }
}

export default ReferenceInfo;