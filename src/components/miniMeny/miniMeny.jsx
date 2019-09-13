import React from 'react';

import {connect} from 'react-redux';

import CartInfo from './cart/cartInfo';
import Chat from '../chat/chat';

const MiniMeny = ({cart}) => {

    return (<main>
        <CartInfo/>
        <Chat/>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
