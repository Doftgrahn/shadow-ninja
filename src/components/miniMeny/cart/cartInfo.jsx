import React, {useEffect, useState, useRef} from 'react';

import {connect} from 'react-redux';

import {Link} from "react-router-dom";

import {ReactComponent as ShoppingCart} from '../../SVG_Icons/shoppingCart/shopping-cart.svg';

import {updateCart} from '../../../services/total/totalAction';

const CartInfo = ({cart, total, dispatch}) => {
    const isInitialMount = useRef(true);
    const [animation, setAnimation] = useState(false);

    const {productQuantity} = total;

    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false
        }
        else {

            if (cart) {
                setAnimation(animation => !animation)
                dispatch(updateCart(cart))
            }

        }

        // updates Cart with sum, productQuantity.

    }, [cart, dispatch])

    return (<div className={`miniMeny ${cart.length <= 0
            ? 'closed'
            : 'isOpen'}`}>
        <Link to="/checkout">
            <div className="miniMeny__wrapper">
                <p className={`total ${animation
                        ? 'shake'
                        : 'shake2'}`}>{productQuantity}
                </p>
                <ShoppingCart/>
            </div>
        </Link>
    </div>)
}

const mapStateToProps = state => ({cart: state.cart, total: state.total.data})

export default connect(mapStateToProps)(CartInfo);
