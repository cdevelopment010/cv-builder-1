import React, { Component } from "react";

class ProjectInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2>Projects</h2>
                {this.props.data.project.map((proj,index)=> {
                                return(
                                    <div key={index} className="projects mb-3">
                                        <div className="projectName mb-2">
                                            <span><h4>{proj.name}</h4></span>
                                            <a href={`https://${proj.link}`} target="blank" className="align-right">{proj.link}</a>
                                        </div>
                                        <div>
                                            <p>{proj.overview}</p>
                                        </div>
                                    </div>
                                    
                                )
                        })}
            </div>
        )
    }
}

export default ProjectInfo;