import React, { Component } from 'react';

class Conditional extends Component {
    state = {
        text1: "Hello",
        text2: "Hi",
        text3: "Bye",
        show_1: true,
        show_2: true,
    }

    highText = () => {
        this.setState({
            show_1: !this.state.show_1,
        })
    }

    byText = () => {
        this.setState({
            show_2: !this.state.show_2,
        })
    }

    render() {
        const { text1, text2, text3, show_1, show_2 } = this.state;
        return (
            <div>
                <button onClick={this.highText}>BTN_1</button>
                <button onClick={this.byText}>{show_2 ? "Hide" : "Show" }</button>
                <span>{show_1 ? <h3>{text2}</h3> : <h3>{text1}</h3>}</span>
                <span>{show_2 ? <h3>{text3}</h3> : null }</span>
            </div>
        )
    }
}

export default Conditional;