import React, { Component } from 'react';
import Name from '../Name/Name';
import Price from '../Price/Price';
import Description from '../Description/Description';

class Product extends Component {

    render() {      

        return (
                <div>
                    <div>{this.props.icon}</div>
                    <Name name = {this.props.name} />
                    <Price price = {this.props.price} />
                    <Description description = {this.props.description} />  
                </div>
        )

    }
}


export default Product;


