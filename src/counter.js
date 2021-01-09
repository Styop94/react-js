import { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            value: props.defaultValue,
        };
        // this.handleClickPlus = this.handleClickPlus.bind(this);
    }
    handleClickPlus = () => {
        console.log(this);
        this.setState({
            value: this.state.value + 1        
        })
    }
    //      handleClickMinus = () => {
    //         console.log(this);
    // this.setState({
    // value: this.state.value - 1 
    // })
    //  }
    render() {
        console.log(this.props)
        return (
            <span>Hello form Counter
                <span>This value is {this.props.x}</span>
                <span><strong>{this.state.value}</strong></span>
                <br/>
                <br/>
                <button onClick={(this.handleClickPlus)}>Count + </button>
                <button onClick={() => {
                    this.setState({
                        value: this.state.value - 1
                    })
                }}
                >Count - </button>
            </span>
        );
    }
}



export default Counter;

