import React from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

//Redux
import {removeProduct, addProduct, subQuant} from '../../../../services/cart/cartAction';

//SVG ICON
import {ReactComponent as Delete} from '../../../../components/SVG_Icons/clear/clear.svg';

import {ReactComponent as Plus} from '../../../../components/SVG_Icons/plus/plus.svg';
import {ReactComponent as Minus} from '../../../../components/SVG_Icons/minus/minus.svg';

const CartProduct = ({cart}) => {
    const dispatch = useDispatch();
    //const totalValue = product.price * product.quantity;

    // Removes product from Cart.
    const remove = (product) => dispatch(removeProduct(product))

    // Adds quantity in shoppingCart
    const addQuantity = (product) => dispatch(addProduct(product))

    // decreases quantiy in ShoppingCart

    const decreaseQuant = (product) => dispatch(subQuant(product))

    console.log(cart);
    const renderCartProducts = cart.map(product => {

        return (<div key={product._id} className="product__container">
            <figure>
                <img src={product.imgURL} alt={product.title}/>
            </figure>

            <div className="desc">
                <h3>{product.title}</h3>
                <div className="desc__info">
                    <p>PRICE:{product.price}</p>
                    <p>QUANTITY:{product.quantity}</p>
                </div>
            </div>

            <div className="allBtn-container">
                <div className="quantiy">
                    <button onClick={() => addQuantity(product)}><Plus/></button>
                    <button onClick={() => decreaseQuant(product)}><Minus/></button>
                </div>

                <div className="btn-container">
                    <button onClick={() => remove(product)}><Delete/></button>
                </div>
            </div>
        </div>)
    })

    return (<div className="checkout__container">
        {renderCartProducts}
    </div>)
}

const mapStateToProps = state => ({cart: state.cart, total: state.total.data})

export default connect(mapStateToProps)(CartProduct);
