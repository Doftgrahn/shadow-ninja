import React from 'react';

import {connect} from 'react-redux';

import CartInfo from './cart/cartInfo';

const MiniMeny = ({cart}) => {

    return (<main>
        <CartInfo/>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
