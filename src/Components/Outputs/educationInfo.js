import React, { Component } from "react";

class EducationInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2>Education</h2>
                <div>
                        {this.props.data.institute.map((ed,index)=> {
                                let dateRange;
                                if (ed.to && ed.from) {
                                    dateRange = `${ed.from} - ${ed.to}`
                                } else if (ed.from && !ed.to) {
                                    dateRange = `${ed.from} - present`
                                }

                                let grade; 
                                if (ed.grade !== "") {
                                    grade = " - " + ed.grade;
                                }
                                return(
                                    <div key={index} className="ed mb-3">
                                        <div className="edName mb-2">
                                            <div>
                                                <span><h4>{ed.school}</h4></span>
                                                <span>{ed.areaStudy}</span>  <span>{grade}</span>
                                            </div>
                                            <span className="align-right">{dateRange}</span>
                                        </div>
                                        <div>
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