import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';

import {ReactComponent as ShoppingCart} from '../SVG_Icons/shoppingCart/shopping-cart.svg';

const MiniMeny = ({cart}) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        if (cart)
            setAnimation(animation => !animation)
    }, [cart])


    console.log(animation);
    // Gets total numberOf products
    const totalNumberOfProducts = cart
        .map((game,) => game.quantity)
        .reduce((a, b) => a + b, 0);

    return (<main className={`miniMeny ${cart.length <= 0
            ? 'closed'
            : 'isOpen'}`}>
        <div className="miniMeny__wrapper">
            <p className={`total ${animation
                    ? 'shake'
                    : 'shake2'}`}>{totalNumberOfProducts}
            </p>
            <ShoppingCart/>
        </div>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
