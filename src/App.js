import React, { Component } from "react";
import NameArea from "./Components/NameAreaInputs";
// import EducationInputs from "./Components/EducationInputs";


class App extends Component {

    constructor() {
      super(); 
      this.state = {
        personalInfo: {
          name: '',
          email: '',
          phone: '', 
          websiteCount: [1]
        }
      }

      this.updateText = this.updateText.bind(this);
      this.addRecord = this.addRecord.bind(this);
    }

    updateText( e ) {
      let targetStateArea = e.target.id.split('-')[0]; 
      let targetStateField = e.target.id.split('-')[1]; 
      let currState = this.state[targetStateArea];
      currState[targetStateField] = e.target.value;
      this.setState({
          [targetStateArea]: currState
      })
  }

  addRecord( e ) {
    
    let targetStateArea = e.target.id.split('-')[0]; 
    let targetStateField = e.target.id.split('-')[1]; 
    let currState = this.state[targetStateArea];
    let count = currState[targetStateField];
    count.push(count.length+1);
    currState[targetStateField] = count;
    this.setState({
      [targetStateArea]: currState
    })
}


  render() {
    return (
      <div className="App">
        <div>
        Hello, world 2.0
        <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
        {/* <EducationInputs />   */}


        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default App;
