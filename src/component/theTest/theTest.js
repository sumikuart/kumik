import React, { Component } from 'react';
import './theTest.css'


import Questions from './testComponents/questions';
import DisplayTest from './testComponents/testMaster';
import Result from './testComponents/result';
import Reset from './testComponents/reset';
import StartTest from './testComponents/preTest';

let questionList = [];
let counter=0;
let toStart=0;

let pointCounterFeeling = 0;
let pointCounterLogic = 0;
let pointCounterFreedom = 0;
let pointCounterControle = 0;

class TheTest extends Component {

        state = {
                timeInTest: 0,
                ready: 0,


                pointFeeling:0,
                pointLogic:0,
                pointFreedom:0,
                pointControl:0
        };

        componentDidMount(){

                counter=0;
                toStart=0;

                pointCounterFeeling = 0;
                pointCounterLogic = 0;
                pointCounterFreedom = 0;
                pointCounterControle = 0;   
        }

        startTest = () => {
                toStart=1;

                console.log("hej")
                this.setState({

                        ready: toStart
                })
        }

        changeQuestion  = () => {     

                counter=counter+1;

                this.setState({
                        timeInTest: counter,
                })
        }
        
        changePoint = (answer) => {
               console.log("feedback: "+ answer) 


                pointCounterFeeling = pointCounterFeeling + questionList[this.state.timeInTest].points[answer][0];
                pointCounterLogic = pointCounterLogic + questionList[this.state.timeInTest].points[answer][1];
                pointCounterFreedom = pointCounterFreedom + questionList[this.state.timeInTest].points[answer][2];
                pointCounterControle = pointCounterControle + questionList[this.state.timeInTest].points[answer][3];

                this.setState({
                        pointFeeling: pointCounterFeeling,
                        pointLogic: pointCounterLogic,
                        pointFreedom: pointCounterFreedom,
                        pointControl: pointCounterControle
                      })



                console.log("feeling: " +this.state.pointFeeling + " score: " + pointCounterFeeling)
                console.log("logic: " +this.state.pointLogic + " score: " + pointCounterLogic)
                console.log("freedom: " +this.state.pointFreedom + " score: " + pointCounterFreedom)
                console.log("control: " +this.state.pointControl + " score: " + pointCounterControle)
        }

render(



//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol
        q01 = new Questions('Whitch of these words would you use to describe yourself?', ["a", "b", "c", "d", "anime"], [ [1,2,3,-4], [2,2,2,2], [3,3,3,3], [4,4,4,4], [0,0,0,0] ]),
        q02 = new Questions('whitch of there ideals are important to you?', ["e", "f", "g", "h"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3], [4,4,4,4] ]),
        q03 = new Questions('what kind of music do you like?', ["i", "j", "k", "l"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3], [4,4,4,4] ]),
        q04 = new Questions('how do you acquire new information? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q05 = new Questions('whitch of there method would you use to solve a conflict? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q06 = new Questions('someone you carefor is sad, how woulde you make them feel better? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]), 
        q07 = new Questions('when you are in a discussion, how do you get your views accros? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]), 
        q08 = new Questions('you are to deliver hard information, that proprobly hurt the one reseving it. how would your do it? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]), 
        q09 = new Questions('how is the best way to reach your goals?: ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]), 
        q10 = new Questions('how to best deal, with people you dont like? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q11 = new Questions('what are the best way to handel emotions? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q12 = new Questions('Someone Disrespect you, what do you do? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q13 = new Questions('when i say Love, what comes to mind? ', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q14 = new Questions('whats your opinion on lying?', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        q15 = new Questions('what makes you happy?', ["Love", "is", "War"], [ [1,1,1,1], [2,2,2,2], [3,3,3,3]]),
        ){
        questionList = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12, q13, q14, q15];

        if(this.state.ready === 0) {
                return(
                        <div className="ComponentStart">

                        <StartTest startVar={this.startTest} />

                        </div>
                )
                
        } else  if (this.state.timeInTest < questionList.length){
        return(
                <div className="ComponentDisplayTest">
        
                <DisplayTest qNumber={this.state} qList={questionList} qHandler={this.changeQuestion} pointHandler={this.changePoint}/>
                <Reset/>
                </div>

        )
} else if( this.state.timeInTest >= questionList.length ) {
        return(

                <div className="ComponentResult">

                <Result resultPoint = {this.state} />
                <Reset/>
                </div>

        )  
} else {
        return (

                <div> 
                <h2> ERRROR!</h2>
                </div>
        )
}

}   
}

export default TheTest