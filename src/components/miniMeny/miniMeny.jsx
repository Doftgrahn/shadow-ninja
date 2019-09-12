import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';

import CartInfo from './cart/cartInfo';

const MiniMeny = ({cart}) => {
    const [animation, setAnimation] = useState(false);

    console.log();
    // Checks in state for updates, renders animation.
    useEffect(() => {
        if (cart)
            setAnimation(animation => !animation)
    }, [cart])

    // Gets total numberOf products

    return (<main className={`miniMeny ${cart.length <= 0
            ? 'closed'
            : 'isOpen'}`}>
        <CartInfo cart={cart} animation={animation}/>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
