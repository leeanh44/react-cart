import React, { Component } from 'react';
import ProductsContainer from './../containers/ProductsContainer';
import MessageContainer from './../containers/MessageContainer';
import CartContainer from './../containers/CartContainer';

class ShoppingContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <div id="shopping">
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
            </div>
        );
    }
}

export default ShoppingContainer;
