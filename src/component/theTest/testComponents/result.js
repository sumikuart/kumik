import React, {Component} from 'react';


class Result extends Component {

render () {
// SET UP POINTS
let completeFeeling = this.props.resultPoint.pointFeeling
let completeLogic = this.props.resultPoint.pointLogic
let completeFreedom = this.props.resultPoint.pointFreedom
let completeControl = this.props.resultPoint.pointControl

let completeScore = completeFeeling + completeLogic + completeFeeling + completeControl

//SET UP DESCRIPTIONS 

let descriptionFeeling = "Feeling Description"
let descriptionLogic = "Logic Description"
let descriptionFreedom  = "Freedom Description"
let descriptionControl = "Control Description"

let descriptionProfile= "Profile Description"

    return(
        <div>

            
            <h2>Result:</h2>

        <div className="resultOverview">

            <div className="resultCombind"> 
                <p className="resultHeadline">Your Kumik Profile:</p>
                <p>{descriptionProfile}</p>
                <p>Score: {completeScore}</p>
            </div>

            <h3>What Each of the kumik Gods think of you:</h3>
        <div className="resultUniq">

            <div className="resultFeeling">
                <p className="resultHeadline">Ku: God of Feelings</p>
                <p>{descriptionFeeling}</p>
                <p>Score: {completeFeeling}</p>
            </div>

            <div className="resultLogic">
                <p className="resultHeadline">Mashia: God of Logic</p>
                <p>{descriptionLogic}</p>
                <p>Score: {completeLogic}</p>
            </div>

            <div className="resultFreedom">
                <p className="resultHeadline">Talim: God of Freedom</p>
                <p>{descriptionFreedom}</p>
                <p>Score: {completeFreedom}</p>
            </div>

            <div className="resultContorl">
                <p className="resultHeadline">Nemo: God of Control</p>
                <p>{descriptionControl}</p>
                <p>Score: {completeControl}</p> 
            </div>

        </div>

        </div>
            
        </div>

    )
}



}

export default Result