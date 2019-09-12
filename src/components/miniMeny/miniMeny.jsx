import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';

import CartInfo from './cart/cartInfo';

const MiniMeny = ({cart}) => {
    const [animation, setAnimation] = useState(false);

    // Checks in state for updates, renders animation.
    useEffect(() => {
        if (cart)
            setAnimation(animation => !animation)
    }, [cart])

    // Gets total numberOf products

    return (<main>
        <CartInfo cart={cart} animation={animation}/>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
