import React, {useState} from 'react';

import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

import {clearProducts} from '../../../../services/cart/cartAction';

const CheckoutFinal = ({cart, totalPrice, totalProducts}) => {
    const dispatch = useDispatch();
    const [hasAccepted, setHasAccepted] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const removeAll = () => (dispatch(clearProducts()))

    const checkout = () => {
        if (cart.length && hasAccepted) {
            setIsValid(true)
            setHasAccepted(false);
            alert(`
                RECIEPT
                ____________
                Total Price : € ${totalPrice}
                Total Number of Products: ${totalProducts}
                ${cart.map(e => e.title)}
                `)
            removeAll()
        } else if (!cart.length) {
            alert('Fill that shiet!')
        } else {
            setIsValid(false);
        }
    };

    return (<div className="checkout__final">
        <div className="checkout-wrapper">
            <span>By clicking here you agree to our terms and permission</span>
            <label className="checkbox-label">
                <input checked={hasAccepted} onChange={e => {
                        setHasAccepted(e.target.checked)
                        setIsValid(true)
                    }} type="checkbox"/>
                <span className="checkbox-custom rectangular"/>
            </label>

        </div>
        <div className="checkout--button">
            <button className="checkout-btn" onClick={checkout}>Checkout</button>
            {
                !isValid
                    ? <span className="error shake">You must accept our terms and permissions</span>
                    : null
            }
        </div>
    </div>)
}

export default connect()(CheckoutFinal);
