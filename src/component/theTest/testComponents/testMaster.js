import React, { Component } from 'react';

let qChecked = 0;  

class DisplayTest extends Component {


    
   handelAnswer = (event) => {

    event.preventDefault();
    var checked = document.getElementsByName('answerValue');

    for(var i=0;  i < checked.length; i ++ ) {

        if ( checked[i].checked) {
            console.log(i)
            this.props.pointHandler(i)
            checked[i].checked = false;
            qChecked = 1; 
        }
    }

    console.log(event)
    console.log(this.props)

    if ( qChecked === 1 ) {
  
        this.props.qHandler()
        qChecked=0;
    }
   
   }


render() {
    const question = this.props.qList[this.props.qNumber.timeInTest].question;
  
    const optionElements = this.props.qList[this.props.qNumber.timeInTest].options
    const shownOptions = [];


    for (let i=0; i < optionElements.length; i++ ) {

        shownOptions.push(<div className="answerDiv"> <label className="costumCheckbox"> <input name="answerValue" type="checkbox" value={i}/> {optionElements[i]} <span className="checkmark"></span> </label> </div>)

    }
 

    console.log(this.props)

    
    let pointCounterFeeling = this.props.qNumber.pointFeeling;
    let pointCounterLogic = this.props.qNumber.pointLogic;
    let pointCounterFreedom = this.props.qNumber.pointFreedom;
    let pointCounterControle = this.props.qNumber.pointControl;

let buttonTekst = "answer"

if((this.props.qNumber.timeInTest +1) === this.props.qList.length) {
    buttonTekst = "Result"
}

    return (
 
        <div>
            <h2> The Kumik-Affection Test</h2>
            <h3>{this.props.qNumber.timeInTest +1} of {this.props.qList.length} Questions</h3>
            <h4>{question}</h4>

            

            <div className="optionDiv">

                <form onSubmit={this.handelAnswer}>
                    <div className="optionForm">
                {shownOptions}
                </div>
                <button type="submit">{buttonTekst}</button>
                </form>
                </div>


            {/* Debug: */}
            <p>Feeling: {pointCounterFeeling}</p>
            <p>Logic: {pointCounterLogic}</p>
            <p>Freedom: {pointCounterFreedom}</p>
            <p>Control: {pointCounterControle}</p>
            
        </div>
    )
}


}

export default DisplayTest;

