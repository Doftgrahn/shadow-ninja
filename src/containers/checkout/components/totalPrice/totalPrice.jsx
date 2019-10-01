import React from "react";

import {connect} from 'react-redux';

// Shows total price
const TotalPrice = ({cart, total, auth}) => {

    const {totalPrice} = total;

    return (<div className="checkout__totalSum">
        {
            cart.length !== 0
                ? (<h3>Total: €{totalPrice}
                </h3>)
                : (<h3>Your Shopping Cart is Empty!</h3>)
        }
    </div>);
};

const mapStateToProps = state => ({cart: state.cart, total: state.total.data, auth: state.auth})

export default connect(mapStateToProps)(TotalPrice);
