import React, { Component } from 'react';

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.price,
        }

    }
    changeBtn = () => {
        let amd = this.state.price;
        let newPrice = parseFloat(amd);
        amd.includes("AMD") ? amd = newPrice / 500 + "$" : amd = newPrice * 500 + "AMD" 
        this.setState({ price: amd })
    }
    render() {
        return (
            <div>
                <span>{this.state.price}</span>
                <button onClick={this.changeBtn}> Change</button>
            </div>
        )
    }
}



export default Price;


