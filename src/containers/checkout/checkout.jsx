import React from 'react';

//Redux
import {connect} from 'react-redux';

// Imported components.
import AmountInCart from './components/amountInCart/amountinCart'
import CartProduct from './components/cartProduct/cartProduct';
import TotalPrice from './components/totalPrice/totalPrice';
import CheckoutFinal from './components/checkoutFinal/CheckoutFinal';

//import {updateCart} from '../../services/total/totalAction';

const Checkout = ({cartProducts, total}) => {
    // Gets total value from Cart.
    const {productQuantity, totalPrice} = total;


    //Renders Products that exists in cartProducts.
    const renderCartProducts = cartProducts.map(product => {
        return <CartProduct key={product._id} {...product} product={product}/>
    });

    return (<main className="checkout">

        <div className="checkout__wrapper">
            <AmountInCart cart={cartProducts} productQuantity={productQuantity}/>

            <div className="checkout__container">
                {renderCartProducts}
            </div>

            <TotalPrice cart={cartProducts} total={totalPrice}/> {
                cartProducts.length
                    ? <CheckoutFinal cart={cartProducts} totalPrice={totalPrice} totalProducts={productQuantity}/>
                    : null
            }
        </div>

    </main>)
}

// mapStateToProps, "fakes a state."
const mapStateToProps = state => ({cartProducts: state.cart, total: state.total.data})

export default connect(mapStateToProps)(Checkout);
