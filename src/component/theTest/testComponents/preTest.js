import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class StartTest extends Component {


render () {

    return(
        <div>
            <h2>Welcome To the Kumik-Affection test.</h2>
            <p>This Test will measure how you'r affected by each of the four kumik gods. And how they think of you.</p>
            

                <ul>
                    <li><h3> The gods are as followed:</h3></li>
                    <li><p> - Ku: God of Feelings</p></li>
                    <li><p> . Mashia: God of Logic</p></li>
                    <li><p> - Talim: God of Freedom</p></li>
                    <li><p> - Nemo: God of Control</p></li>
                </ul>

                <p className="moreInfo">For more info on kumik and the gods in general, look under <NavLink to="/lore">Lore</NavLink></p>

            <p className="italic">[how it works: you will be shown several questions, and statements. you need to click each checkbox that you can relate with. (you can click as many as you want, But each question need atleast one answer)]</p>

            <form onSubmit={this.props.startVar}>
            <button type="submit" >Start</button>
            </form>


        </div>
    )
}



}

export default StartTest