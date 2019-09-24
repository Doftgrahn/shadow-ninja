import React, {useEffect} from 'react';

import Fade from 'react-reveal/Fade';

// Redux ..
import {connect} from "react-redux";
import {fetchProducts} from '../../services/products/productActions';

// Spinner, uses for loading Animation.
import Loader from '../../components/loader/loader';

// All Games
import PromoGame from './components/promoGame/promoGame';
import SortGames from './components/sortGames/sortGames';
import AllGames from './components/allGames/allGames';

// General Wrapper for GAMES
const Store = ({
    dispatch,
    filter,
    sort,
    products,
    loading,
    error,
    match
}) => {

    // Dispatch on launch, shows all products via Redux.
    // and sort products with sort state from ./products/productReducer
    useEffect(() => {
        dispatch(fetchProducts(filter, sort))
    }, [dispatch, filter, sort])

    //If Theres an error loading the page.

    if (error) {
        return (<div>
            <Fade>
                Error, no connection
            </Fade>
        </div>)
    }

    // If Connection is slow, or when loading. This will show.
    if (loading) {
        return <Fade>
            <Loader/>
        </Fade>
    }

    return (<main className="games">
        <Fade>
            <PromoGame match={match} products={products}/>
            <SortGames/>
            <AllGames products={products} match={match}/>
        </Fade>

    </main>)
}

// state, can be retrieved through props or destructuring.
const mapStateToProps = state => ({filter: state.products.filter, sort: state.products.sort, products: state.products.items, loading: state.products.loading, error: state.products.error});

export default connect(mapStateToProps)(Store);
