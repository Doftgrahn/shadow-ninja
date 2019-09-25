import React from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'


//Redux
import {removeProduct, addProduct , subQuant} from '../../../../services/cart/cartAction';


//SVG ICON
import {ReactComponent as Delete} from '../../../../components/SVG_Icons/clear/clear.svg';

import {ReactComponent as Plus} from '../../../../components/SVG_Icons/plus/plus.svg';
import {ReactComponent as Minus} from '../../../../components/SVG_Icons/minus/minus.svg';


const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    //const totalValue = product.price * product.quantity;

    // Removes product from Cart.
    const remove = () => dispatch(removeProduct(product))


// Adds quantity in shoppingCart
    const addQuantity = () => dispatch(addProduct(product))


    // decreases quantiy in ShoppingCart

    const decreaseQuant = () => dispatch(subQuant(product))

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

<div className="allBtn-container">
        <div className="quantiy">
<button onClick={addQuantity}><Plus/></button>
<button onClick={decreaseQuant}><Minus/></button>
        </div>

        <div className="btn-container">
            <button onClick={remove}><Delete/></button>
        </div>
</div>
    </div>)
}

export default connect()(CartProduct);
