import React from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'


//Redux
import {removeProduct} from '../../../services/cart/cartAction';

import {ReactComponent as Delete} from '../../../components/SVG_Icons/clear.svg';

const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    //const totalValue = product.price * product.quantity;
    const remove = () => dispatch(removeProduct(product))
    return (<div className="product__container">

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

        <div className="btn-container">
            <button onClick={remove}><Delete/></button>
        </div>

    </div>)
}

export default connect()(CartProduct);
