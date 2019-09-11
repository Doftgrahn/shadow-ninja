import React from 'react';

import {connect} from 'react-redux';

import {updateCart} from '../../services/total/totalAction';

//import { updateCart } from '../../services/total/totalActions';

import CartProduct from './components/cartProduct';

const Checkout = ({cartProducts, newProduct}) => {

    const totalPrice = cartProducts
        .map(game => game.price * game.quantity)
        .reduce((biggest, p) => biggest + p, 0)

    const renderCartProducts = cartProducts.map(product => <CartProduct key={product._id} product={product}/>)

    return (<main>
        <div>{renderCartProducts}
            <h1>TOTALPRICE: {totalPrice}</h1>
        </div>
    </main>)
}

const mapStateToProps = state => ({cartProducts: state.cart, cartTotal: state.total.data})

export default connect(mapStateToProps, {updateCart})(Checkout);
