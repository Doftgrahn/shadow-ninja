import React from 'react';

import {connect} from 'react-redux';

import CartProduct from './components/cartProduct/cartProduct';

const Checkout = ({cartProducts}) => {

    //Total Price for products
    const totalPrice = cartProducts
        .map(game => game.price * game.quantity)
        .reduce((biggest, p) => biggest + p, 0)

    // Total Number of Products
    const totalNumberOfProducts = cartProducts
        .map((game,) => game.quantity)
        .reduce((biggest, b) => biggest + b, 0);

    // Checkout Functuin
    const checkout = () => {
        if (cartProducts.length) {
            alert(`
                RECIEPT
                ____________
                Total Price : € ${totalPrice}
                Total Number of Products: ${totalNumberOfProducts}
                ${cartProducts.map(e => e.title)}
                `)
        } else {
            alert('Fill that shiet!')
        }
    };

    //Renders cartProducts
    const renderCartProducts = cartProducts.map(product => {
        return <CartProduct key={product._id} {...product} product={product}/>
    });

    return (<main className="checkout">
        <div className="checkout__wrapper">
            {
                cartProducts.length !== 0
                    ? <h1>You have {totalNumberOfProducts}
                            items in the Shopping Cart</h1>
                    : null
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

const mapStateToProps = state => ({cartProducts: state.cart})

export default connect(mapStateToProps)(Checkout);
