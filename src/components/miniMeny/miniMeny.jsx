import React from 'react';

import {connect} from 'react-redux';

const MiniMeny = ({cart}) => {

    const totalNumberOfProducts = cart
        .map((game,) => game.quantity)
        .reduce((a, b) => a + b, 0);

    return (<main className={`miniMeny ${cart.length <= 0
            ? 'active'
            : 'isOpen'}`}>
        <p>{totalNumberOfProducts}
        </p>
    </main>)
}

const mapStateToProps = state => ({cart: state.cart})

export default connect(mapStateToProps)(MiniMeny);
