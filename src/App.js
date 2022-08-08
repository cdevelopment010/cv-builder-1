import React, { Component } from "react";
import NameArea from "./Components/NameAreaInputs";
import PersonalInfo from "./Components/PersonalInfo";
// import EducationInputs from "./Components/EducationInputs";


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
        currState[targetStateField][arrIndex] = e.target.value;
      } else {
        currState[targetStateField] = e.target.value;
        
        console.log(currState[targetStateField]);
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
    count.push('');
    currState[targetStateField] = count;
    this.setState({
      [targetStateArea]: currState
    })
}


  render() {
    return (
      <div className="App">
        <div>
        <h2>CV-Builder</h2>
        <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
        {/* <EducationInputs />   */}


        </div>
        <div>
          <PersonalInfo data={this.state.personalInfo}/>
        </div>
      </div>
    )
  }
}

export default App;
