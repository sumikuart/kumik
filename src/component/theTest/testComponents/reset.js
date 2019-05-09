import React, {Component} from 'react';


class Reset extends Component {


render () {

    return(
        <div className="resetStyling">
        <form onSubmit={this.props.startVar}>
            <button type="submit" >Restart Test</button>
            </form>


        </div>
    )
}



}

export default Reset