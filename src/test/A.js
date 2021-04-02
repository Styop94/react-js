import React, {Component} from 'react';
// import B from './B';
import C from './C'

export default class A extends Component {
    state = {
        text: "", 
    }
    // handelChange = (event) => {
    //     this.setState ({
    //         text: event.target.value
    //     })
    // }
    render() {
        return (
            <div>
               <C oneSendValue = {(param)=> {
                    this.setState({
                        text: param,
                    })
               }}/>
               <h4>{this.state.text}</h4>
            </div>
        );
    }
}