import React from 'react';

import {ReactComponent as ShoppingCart} from '../../SVG_Icons/shoppingCart/shopping-cart.svg';

const CartInfo = ({animation, cart}) => {

    const total = cart
        .map((game,) => game.quantity)
        .reduce((a, b) => a + b, 0);

    return (<div className="miniMeny__wrapper">
        <p className={`total ${animation
                ? 'shake'
                : 'shake2'}`}>{total}
        </p>
        <ShoppingCart/>
    </div>)
}

export default CartInfo;
