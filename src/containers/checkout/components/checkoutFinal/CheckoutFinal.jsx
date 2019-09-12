import React, {useState} from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

//Function that clears all products from state.
import {clearProducts} from '../../../../services/cart/cartAction';

const CheckoutFinal = ({cart, totalPrice, totalProducts}) => {
    // Get Dispatch from Redux.
    const dispatch = useDispatch();

    // States for validation and checkbox.
    const [hasAccepted, setHasAccepted] = useState(false);
    const [isValid, setIsValid] = useState(true);

    // Clears entire list. ( Redux. )
    const removeAll = () => (dispatch(clearProducts()))

    const checkout = () => {
        // If cart exists and checkbox is okay, send in stuff and delete entire state.
        if (cart.length && hasAccepted) {
            setIsValid(true)
            setHasAccepted(false);
            alert(`
                RECIEPT
                _________________________________________
                Total Price : € ${totalPrice}
                Total Number of Products: ${totalProducts}
                ${cart.map(e => e.title)}
                `)
            removeAll();
        } else if (!cart.length) {
            //If Nothing exists in cart.
            alert('Fill that shiet!')
        } else {
            // Show Error Message
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
