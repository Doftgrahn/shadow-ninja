import React, {Fragment} from 'react';

import {connect} from 'react-redux';


const AmountInCart = ({cart, total}) => {
    const {productQuantity} = total;

    return (<Fragment>
        {
            cart.length !== 0
                ? <h1>You have {productQuantity} items in the Shopping Cart</h1>
                : null
        }
        < /Fragment>)
}

const mapStateToProps = state => ({cart: state.cart, total: state.total.data})


export default connect(mapStateToProps)(AmountInCart);
