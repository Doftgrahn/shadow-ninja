import React, {Fragment} from 'react';

const AmountInCart = ({cart, totalNumberOfProducts}) => {
    return (<Fragment>
        {
            cart.length !== 0
                ? <h1>You have {totalNumberOfProducts}
                        items in the Shopping Cart</h1>
                : null
        }
        < /Fragment>)
}


export default AmountInCart;
