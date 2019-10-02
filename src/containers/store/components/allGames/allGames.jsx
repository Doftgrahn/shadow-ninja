import React from 'react';
//import {connect} from "react-redux";
// import {fetchProducts} from '../../../../services/products/productActions';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.
const AllGames = ({match}) => {

    return (<section className="game__wrapper">
        <OneGame match={match}/>
    </section>)
}


// state, can be retrieved through props or destructuring.

export default AllGames;
