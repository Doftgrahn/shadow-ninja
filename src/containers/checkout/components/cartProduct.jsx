import React from 'react';

//Redux
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux'


import {removeProduct} from '../../../services/cart/cartAction';

const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    //const totalValue = product.price * product.quantity;
    const remove = () => dispatch(removeProduct(product))
    return (
    <div className="product__container">
        <p>TITLE:{product.title}</p>
        <p>QUANTITY:{product.quantity}</p>
        <p>PRICE:{product.price}</p>
        <button onClick={remove}>DELETE</button>
        <br/>
    </div>)
}

const mapStateToProps = state => ({

})

export default connect()(CartProduct);
