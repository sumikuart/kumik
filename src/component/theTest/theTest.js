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

// NOTE TO MY SELF: Feeling er MEGET underrepræsenteret. de andre er fint balanceret

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)
        q01 = new Questions('Whitch of these words would you use to describe yourself?', 
         ["Happy", "Sad", "A Thinker", "Impulsiv", "Creativ", "Smart", "Athletic", "Lazy", "Funny", "Charsmatic", "Loyal", "Brave", "A Leader"], 
         [ [3,0,4,2],[3,0,-2,-1],[-2,4,0,4],[3,-4,4,-4],[4,1,4,0],[0,4,-2,2],[0,1,2,4],[1,-3,1,-1],[2,0,3,0],[0,3,3,4],[-1,4,-3,4],[1,0,4,2],[0,4,0,4]]),
      

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)
         q02 = new Questions('When i say -Love- what comes to mind?',
         ["Desires ", "Luck", "The Meaning of life", "Fun", "My Future", "A social construct", "Envy", "Happiness", "Waste of Time"], 
         [ [4,0,3,-3],[-4,1,4,-2],[2,0,-3,0],[2,3,3,-3],[3,-1,-4,0],[-4,4,0,4],[3,-3,3,-1],[2,0,-2,0],[-4,3,0,4] ]),
 
//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)      
         q03 = new Questions('What entertains you?',
         ["Information", "Comedy", "Micro-Management", "Learning", "Party", "Create Things", "Be Creative", "Casual Socializing", "Listening to Music", 
        "Big Projects", "Challenges", "Pets", "My Hobby(s)", "Movies", "Observing People", "Being the center of Attention"],
         [ [-1,4,0,4],[2,-1,2,0],[-2,4,0,4],[-3,4,2,3],[4,-3,4,-4],[0,4,3,4],[4,1,4,0],[3,0,2,-1],[2,0,3,4],[-2,4,-1,-2],[-3,4,-3,0],
        [4,-3,-1,-1],[4,2,-1,4],[1,1,4,0],[1,3,0,4],[4,-2,1,-3] ]),

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)       
        q04 = new Questions('What makes you feel better, when you are feeling down?',
         ["Socializing with friends", "Talking About My troubles", "Focus on something else", "let off steam", "Try Solveing my problems", 
         "Writing down my thougths", "Exercise", "Party's", "Time Alone"],
         [[3,1,2,-1],[4,3,2,-1],[-3,0,4,2],[3,1,3,-3],[1,4,1,2],[-2,2,1,4],[-2,3,4,4],[4,-3,4,-4],[0,2,-2,4]]),

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)      
        q05 = new Questions('Whats your opinion on lying?', 
         ["It is never okay to lie", "A lie to prevent someone to get hurt is okay", "A lie to make a story more intressting is fair", 
         "If it is NEVER exposed as a lie, its the truth!", "A lie to keep control, is okay", "Lying is a necessary evil",
         "A lie, is a way to get what you want", "I would use lies to make someone feel better", "White lies is normal i think"],
         [ [4,-3,-1,-4],[2,-1,2,4],[-4,-2,4,3],[2,4,-3,4],[-4,4,0,4],[-2,0,4,3],[-4,4,3,4],[2,-3,2,4],[0,3,4,1]]),

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)
        q06 = new Questions('Someone close to you is sad, how woulde you make them feel better?',
         ["Listen to everyting they have to say", "Compliment them", "Try to motivate them to keep fighting!", "Ask them to make the best of it!",
        "Make them forget about it, by distracting them with something else", "Try solving there problems",
         "Confront everyone that makes them sad, and make them stop" ],
         [ [1,2,-1,3],[3,2,0,2],[1,4,1,3],[-3,1,2,3],[2,2,4,1],[-1,4,-3,4],[3,0,-1,2]]), 

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)
        q07 = new Questions('When you are in a discussion, how do you react?',
         ["I make confident statements, that gives off the impression that you of course are right", "I use scienctific facts, to backup your statment", 
         "Try to end the discussion as fast a possible", "Love every bit of it", "Carefully listens, I migth learn something",
         "It will proprobly end in a argument more then a discussion", "Everyone has there right to opinions",
        "Carefully listen to alle their arguments, then use there own arguments against them", "Use my own emotions, as fual to the argument",
        "The discussion ends.. when i wins", "I don't care about winning"], 
         [ [3,4,2,4],[-4,4,-1,3],[-3,3,4,4],[3,4,-3,0],[-3,4,1,0],[4,-4,2,-3],[-1,3,4,-4],[-3,4,0,4],[4,-4,2,-4],[4,4,-4,4],[-3,-4,4,-3]]), 

//  point rækkefølge: 0: feeling 1:logic 2:freedom 3:contol (score: -4 to 4)
        q08 = new Questions('You are about to deliver information, to someone you love, that will hurt them. How would your do it? ',
         ["Tell them as gentle is possible, no need to hurt them more further", 
         "Hide the info, they will find out on there own. Then i dont have to deliver the bad news", "Tell them. Then try point out alle the good things about it",
        "Use the - i have good, and bad news - ", "Tell them as fast and accuret as possible. They can handle the raw truth", 
        "Send a mail with the info. Then they can react alone, and as they see fit"],
         [ [2,1,3,1],[0,2,2,-4],[4,2,4,-4],[-1,3,3,-4],[0,4,1,4],[1,4,0,-4],]), 
      
        ){
        questionList = [q01, q02, q03, q04, q05, q06, q07, q08];     

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