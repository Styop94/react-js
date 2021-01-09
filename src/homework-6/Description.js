import React, {Component} from 'react';

class Description extends Component{
    constructor () {
        super()
        

    }
    render () {
        return(
            <span>
                {this.props.value}
            </span>
        )
    }
}



export default Description;


