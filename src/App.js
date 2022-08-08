import React, { Component } from "react";
import NameArea from "./Components/NameAreaInputs";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInputs from "./Components/EducationInputs";
import EducationInfo from "./Components/educationInfo";
import CareerInputs from "./Components/CareerInputs";

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
      <div className="App">
        <div className="border">
        <h2>CV-Builder</h2>
        <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
        <EducationInputs callback={this.updateText} info={this.state.educationInfo} newField={this.addRecord}/>  
        <CareerInputs callback={this.updateText} info={this.state.careerInfo} newField={this.addRecord}/>


        </div>
        <div className="border">
          <PersonalInfo data={this.state.personalInfo}/>
          <EducationInfo data={this.state.educationInfo}/>
        </div>
      </div>
    )
  }
}

export default App;
