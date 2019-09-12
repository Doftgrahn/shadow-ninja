import React, {useState} from 'react';

const CheckoutFinal = ({cart, totalPrice, totalProducts}) => {
    const [hasAccepted, setHasAccepted] = useState(false);
    const [isValid, setIsValid] = useState(true);

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
                <input checked={hasAccepted} onChange={e => setHasAccepted(e.target.checked)} type="checkbox"/>
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

export default CheckoutFinal;
