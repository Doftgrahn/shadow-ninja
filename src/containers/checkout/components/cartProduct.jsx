import React from 'react';

//Redux
import {connect} from 'react-redux';

import {removeProduct} from '../../../services/cart/cartAction';

const CartProduct = ({product}) => {
    //const totalValue = product.price * product.quantity;

    return (<div className="product__container">
        <p>TITLE:{product.title}</p>
        <p>QUANTITY:{product.quantity}
        </p>
        <p>PRICE:{product.price}</p>
        <button onClick={() => removeProduct(product)}>DELETE</button>
        <br/>
    </div>)
}

export default connect(null, {removeProduct})(CartProduct);
