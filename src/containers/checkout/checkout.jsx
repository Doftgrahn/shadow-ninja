import React, {Fragment, useEffect}  from 'react';

import Fade from 'react-reveal/Fade';

//Redux
import {connect} from 'react-redux';

// Imported components.
import AmountInCart from './components/amountInCart/amountinCart'
import CartProduct from './components/cartProduct/cartProduct';
import TotalPrice from './components/totalPrice/totalPrice';
import CheckoutFinal from './components/checkoutFinal/CheckoutFinal';
import  {isGameValidToBuy}  from '../../services/login/actions/authActions';


const Checkout = ({cart, total, auth, isPurchaseValid, isGameValidToBuy}) => {


  let url = auth.user.id;
  let userData = auth.user;



  useEffect(() => {
    isGameValidToBuy(url, userData, cart, total, isPurchaseValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const mapStateToProps = state => ({cart: state.cart, total: state.total.data, auth: state.auth, isPurchaseValid: state.isPurchaseValid})

export default connect(mapStateToProps, {isGameValidToBuy})(Checkout);
