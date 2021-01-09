import React, { Component } from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';

class Product extends Component {

    render() {
        const {name, price, description} = this.props
        return (
            <React.Fragment>
                <div>
                    <Name value={name} />   
                    <Price value={price} />
                    <Description value={description} />
                </div>
            </React.Fragment>
        )
    }
}


export default Product;


