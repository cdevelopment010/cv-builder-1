import React, { Component } from "react";

class EducationInfo extends Component {

    render() {
        return (
            <div>
                <div>
                        {this.props.data.institute.map((ed,index)=> {
                                let dateRange;
                                if (ed.to && ed.from) {
                                    dateRange = `${ed.from} - ${ed.to}`
                                } else if (ed.from && !ed.to) {
                                    dateRange = `${ed.from} - present`
                                }
                                return(
                                    <div key={index}>
                                        <div>
                                            <span><h4>{ed.school}</h4></span>
                                            <span>{dateRange}</span>
                                            <p>{ed.grade}</p>
                                        </div>
                                        <div>
                                            <p>{ed.areaStudy}</p>
                                            <p>{ed.overview}</p>
                                        </div>
                                    </div>
                                    
                                )
                        })}
                </div>
            </div>
        )
    }
}

export default EducationInfo;