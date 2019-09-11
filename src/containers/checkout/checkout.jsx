import React from 'react';

import {connect} from 'react-redux';

import CartProduct from './components/cartProduct';

const Checkout = ({cartProducts, newProduct}) => {

    const totalPrice = cartProducts
        .map(game => game.price * game.quantity)
        .reduce((biggest, p) => biggest + p, 0)

    const renderCartProducts = cartProducts.map(product => <CartProduct key={product._id} product={product}/>)

    const totalNumberOfProducts = cartProducts
        .map((game,) => game.quantity)
        .reduce((a, b) => a + b, 0)

    return (<main className="checkout">
        {
            cartProducts.length !== 0
                ? <h1>You have {totalNumberOfProducts}
                        items in le ShoppingCart</h1>
                : <h1>you have no items
                    </h1>
        }

        <div className="checkout__wrapper">{renderCartProducts}
        </div>

        {
            cartProducts.length !== 0
                ? <h1>TOTALPRICE: €{totalPrice}
                    </h1>
                : <h1>Your Shopping Cart is Empty!</h1>
        }
    </main>)
}

const mapStateToProps = state => ({cartProducts: state.cart, cartTotal: state.total.data})

export default connect(mapStateToProps)(Checkout);
