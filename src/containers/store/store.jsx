import React, {useEffect} from 'react';

// Redux ..
import {connect} from "react-redux";
import {fetchProducts} from '../../services/products/productActions';

// Spinner, uses for loading Animation.
import Loader from '../../components/loader/loader';

// All Games
import PromoGame from './components/promoGame/promoGame';
import SortGames from './components/sortGames/sortGames';
import AllGames from './components/allGames/allGames';
//Navbar, in Progress
import StoreNavbar from './components/storenavbar/storenavbar';

// General Wrapper for GAMES
const Store = ({dispatch, products, loading, error, match}) => {


// Dispatch on launch, shows all products via Redux.
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])



//If Theres an error loading the page.

    if (error) {
        return (<div>Error, no connection</div>)
    }


// If Connection is slow, or when loading. This will show.
    if (loading) {
        return <Loader/>
    }

    return (
    <main className="games">
        <PromoGame match={match} products={products}/>
        <StoreNavbar/>
        <SortGames/>
        <AllGames products={products} match={match}/>
    </main>)
}

// state, can be retrieved through props or destructuring.
const mapStateToProps = state => ({products: state.products.items, loading: state.products.loading, error: state.products.error});


export default connect(mapStateToProps)(Store);
