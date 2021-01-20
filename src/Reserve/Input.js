import React, {Component} from 'react';

export default class Input extends Component {
    state = {
        text: "",
        value: "",
    }
    changeFunc = (event) => {
      let pop = event.target.value  
        this.setState({text:pop})
        
    }
    changeText =() =>{
        this.setState({
            value:this.state.text,
            text: "",
        })
    }
    
    render () {
        return (
            <div>
                <input value={this.state.text} type="text" onChange={this.changeFunc} />
                <button onClick={this.changeText}>Click</button>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}