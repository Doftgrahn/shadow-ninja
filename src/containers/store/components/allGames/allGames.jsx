import React from 'react';
// import {connect} from "react-redux";
// import {fetchProducts} from '../../../../services/products/productActions';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.
const AllGames = ({match, dispatch, isFetching, filter, sort, products, loading, error}) => {

	const renderAllGames = products.map((game) => {

		return <OneGame match={match} key={game._id} gameinfo={game}/>
	})

    return (
    <section className="game__wrapper">
        {renderAllGames}
    </section>)
}


// state, can be retrieved through props or destructuring.
// const mapStateToProps = state => ({isFetching: state.scrollBottom.isFetching, filter: state.products.filter, sort: state.products.sort, products: state.products.items, loading: state.products.loading, error: state.products.error});

// export default connect(mapStateToProps)(AllGames);
export default AllGames
