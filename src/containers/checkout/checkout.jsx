import React, {Fragment} from 'react';

import Fade from 'react-reveal/Fade';

//Redux
import {connect} from 'react-redux';

// Imported components.
import AmountInCart from './components/amountInCart/amountinCart'
import CartProduct from './components/cartProduct/cartProduct';
import TotalPrice from './components/totalPrice/totalPrice';
import CheckoutFinal from './components/checkoutFinal/CheckoutFinal';

//import {updateCart} from '../../services/total/totalAction';

const Checkout = ({cart, total}) => {

    const showPrice = () => {
        if (cart.length) {
            return <CheckoutFinal/>
        } else {
            return null
        }
    }

    return (<main className="checkout">
        <Fade>
            <div className="checkout__wrapper">
                <AmountInCart/>
                <CartProduct/>
                <TotalPrice/>
                <Fragment>
                    {showPrice()}
                </Fragment>
            </div>
        </Fade>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart, total: state.total.data})

export default connect(mapStateToProps)(Checkout);
