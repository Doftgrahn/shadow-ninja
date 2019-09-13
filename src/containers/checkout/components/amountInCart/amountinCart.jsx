import React, {Fragment} from 'react';

const AmountInCart = ({cart, productQuantity}) => {
    return (<Fragment>
        {
            cart.length !== 0
                ? <h1>You have {productQuantity} items in the Shopping Cart</h1>
                : null
        }
        < /Fragment>)
}


export default AmountInCart;
