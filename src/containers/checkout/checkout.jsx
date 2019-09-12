import React, {useEffect} from 'react';

import { connect } from 'react-redux';


import { loadCart, removeProduct } from '../../services/cart/cartAction';
import { updateCart } from '../../services/total/totalAction';
//import { updateCart } from '../../services/total/totalActions';

const Checkout = ({cartProducts, newProduct,productToRemove, cartTotal}) => {


    const addProduct = product => {
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if(cp._id === product._id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        })

        if(!productAlreadyInCart) {
            cartProducts.push(product)
        }

        updateCart(cartProducts)
    }

    console.log(cartTotal);
    return (<main>
        <h1>This is Checkout</h1>
    </main>)
}




const mapStateToProps = state => ({
cartProducts: state.cart.products,
newProduct: state.cart.productToAdd,
productToRemove : state.cart.productToRemove,
cartTotal: state.total.data
})




export default connect(mapStateToProps, {loadCart, updateCart, removeProduct})(Checkout);
