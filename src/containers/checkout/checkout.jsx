import React from 'react';

//Redux
import {connect} from 'react-redux';


// Imported components.
import AmountInCart from './components/amountInCart/amountinCart'
import CartProduct from './components/cartProduct/cartProduct';
import TotalPrice from './components/totalPrice/totalPrice';
import CheckoutFinal from './components/checkoutFinal/CheckoutFinal';

const Checkout = ({cartProducts}) => {

    //Total Price for products
    const totalPrice = cartProducts
        .map(game => game.price * game.quantity)
        .reduce((biggest, p) => biggest + p, 0)

    // Total Number of Products
    const totalNumberOfProducts = cartProducts
        .map((game,) => game.quantity)
        .reduce((biggest, b) => biggest + b, 0);

    //Renders Products that exists in cartProducts.
    const renderCartProducts = cartProducts.map(product => {
        return <CartProduct key={product._id} {...product} product={product}/>
    });

    return (<main className="checkout">

        <div className="checkout__wrapper">
            <AmountInCart cart={cartProducts} totalNumberOfProducts={totalNumberOfProducts}/>

            <div className="checkout__container">
                {renderCartProducts}
            </div>

            <TotalPrice cart={cartProducts} totalPrice={totalPrice}/>

            {
                cartProducts.length
                    ? <CheckoutFinal cart={cartProducts} totalPrice={totalPrice} totalProducts={totalNumberOfProducts}/>
                    : null
            }
        </div>

    </main>)
}


// mapStateToProps, "fakes a state."
const mapStateToProps = state => ({cartProducts: state.cart})

export default connect(mapStateToProps)(Checkout);
