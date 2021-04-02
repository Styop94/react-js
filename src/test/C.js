import React, {Component} from 'react';

export default class C extends Component {
    
    handelChange = (event) => {
        // const {target : {value} } = event.target;
        // const {value} = event.target;
        this.props.oneSendValue(event.target.value)
    }

    render() {
        return (
            <div>
            <input type="text" onChange={this.handelChange} />
            </div>
        );
    }
}