import React from 'react';

import {connect} from 'react-redux';

import CartProduct from './components/cartProduct';

const Checkout = ({cartProducts, newProduct}) => {

    const totalPrice = cartProducts
        .map(game => game.price * game.quantity)
        .reduce((biggest, p) => biggest + p, 0)

    const totalNumberOfProducts = cartProducts
        .map((game,) => game.quantity)
        .reduce((a, b) => a + b, 0);

    const checkout = () => {
        alert(`Total Price : € ${totalPrice}`)
    }

    const renderCartProducts = cartProducts.map(product => <CartProduct key={product._id} product={product}/>)

    return (<main className="checkout">
        <div className="checkout__wrapper">
            {
                cartProducts.length !== 0
                    ? <h1>You have {totalNumberOfProducts} items in le Shopping Cart</h1>
                    : <h1>you have no items</h1>
            }
            <div className="checkout__container">
                {renderCartProducts}
            </div>

            <div className="checkout__totalSum">
                {
                    cartProducts.length !== 0
                        ? <h3>Total sum: €{totalPrice}
                            </h3>
                        : <h3>Your Shopping Cart is Empty!</h3>
                }
            </div>

            <button className="checkout-btn" onClick={checkout}>Checkout</button>
            
        </div>

    </main>)
}

const mapStateToProps = state => ({cartProducts: state.cart, cartTotal: state.total.data})

export default connect(mapStateToProps)(Checkout);
