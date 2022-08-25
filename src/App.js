import React, { Component } from "react";

import NameArea from "./Components/Inputs/NameAreaInputs";
import PersonalInfo from "./Components/Outputs/PersonalInfo";

import EducationInputs from "./Components/Inputs/EducationInputs";
import EducationInfo from "./Components/Outputs/educationInfo";

import CareerInputs from "./Components/Inputs/CareerInputs";
import CareerInfo from "./Components/Outputs/CareerInfo";

import ProjectInputs from "./Components/Inputs/ProjectInputs";
import ProjectInfo from "./Components/Outputs/ProjectInfo";

import SkillsInput from "./Components/Inputs/SkillsInput";
import SkillInfo from "./Components/Outputs/SkillInfo";

import ReferenceInput from "./Components/Inputs/ReferenceInput";
import ReferenceInfo from "./Components/Outputs/ReferenceInfo";

import DocumentStyle from "./Components/DocumentStyle";



class App extends Component {

    constructor() {
      super(); 
      this.state = {
        personalInfo: {
          name: '',
          email: '',
          phone: '', 
          about: '',
          websiteCount: ['']
        }, 
        educationInfo: {
          institute: [{
            school: '',
            from: '',
            to: '',
            grade: '',
            areaStudy: '',
            overview: ''
          }]
        }, 
        careerInfo: {
          career: [{
            title: '',
            company: '',
            from: '',
            to:'',
            overview: ''
          }]
        }, 

        projectInfo: {
          project: [{
            name: '',
            link: '',
            overview: ''
          }]
        }, 
        skillInfo: {
          skills:['']
        }, 
        referenceInfo: {
          reference:[{
            name: '',
            email: '',
            phone: ''
          }]
        }
      }

      this.updateText = this.updateText.bind(this);
      this.addRecord = this.addRecord.bind(this);
      this.printCV = this.printCV.bind(this);
    }

    printCV( ) {
      window.print();
    }

    updateText( e ) {
      let targetStateArea = e.target.id.split('-')[0]; 
      let targetStateField = e.target.id.split('-')[1]; 

      let currState = this.state[targetStateArea];
      if (Array.isArray(currState[targetStateField])) {
        let arrIndex = e.target.id.split('-')[2];

        if (e.target.id.split('-')[3] !== 'input' && e.target.id.split('-')[3] !== 'btn') {
          let inputSec = e.target.id.split('-')[3]; 
          currState[targetStateField][arrIndex][inputSec] = e.target.value;
        } else {
          currState[targetStateField][arrIndex] = e.target.value;
        }




      } else {
        currState[targetStateField] = e.target.value;
      }
      
      this.setState({
          [targetStateArea]: currState
      })
  }

  addRecord( e ) {
 
    let targetStateArea = e.target.id.split('-')[0]; 
    let targetStateField = e.target.id.split('-')[1]; 
    let currState = this.state[targetStateArea];

    let count = currState[targetStateField];
    let newRecord;

    if (typeof count[0] === 'object') {
      newRecord = {...count[0]};
      for(let item in newRecord) {
        newRecord[item] = ''
  
      }
    } else {
      newRecord = '';
    }
    

    count.push(newRecord);
    currState[targetStateField] = count;
    this.setState({
      [targetStateArea]: currState
    })
}


  render() {
    return (
      <div className="grid-2-col grid-gap-0 grid-sm">
        <div className="border print-hide d-grid border-bottom-0">
        <h2 className="text-center mt-2 text-underline title">CV-Builder</h2>
        <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
        <EducationInputs callback={this.updateText} info={this.state.educationInfo} newField={this.addRecord}/>  
        <CareerInputs callback={this.updateText} info={this.state.careerInfo} newField={this.addRecord}/>
        <ProjectInputs callback={this.updateText} info={this.state.projectInfo} newField={this.addRecord}/>
        <SkillsInput callback={this.updateText} info={this.state.skillInfo} newField={this.addRecord}/>
        <ReferenceInput callback={this.updateText} info={this.state.referenceInfo} newField={this.addRecord}/>
        <DocumentStyle />
        
        <button type="button" id="printBtn" onClick={this.printCV}>Print</button>
        </div>

        <div className="cv print-page">
          <PersonalInfo data={this.state.personalInfo}/>
          <EducationInfo data={this.state.educationInfo}/>
          <CareerInfo data={this.state.careerInfo} />
          <ProjectInfo data={this.state.projectInfo} />
          <SkillInfo data={this.state.skillInfo} />
          <ReferenceInfo data={this.state.referenceInfo} />
        </div>
      </div>
    )
  }
}

export default App;
