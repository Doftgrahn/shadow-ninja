import React, {useEffect, useRef} from 'react';

import Fade from 'react-reveal/Fade';

// Redux ..
import {connect} from "react-redux";
import {fetchProducts, fetchProductsWithQuery} from '../../services/products/productActions';



// import {} from '../../services/infiniteScroll/scrollActions'
import {changeFetchState, fetchDone} from '../../services/infiniteScroll/scrollActions'
// Spinner, uses for loading Animation.
import Loader from '../../components/loader/loader';

// All Games
import PromoGame from './components/promoGame/promoGame';
import SortGames from './components/sortGames/sortGames';
import AllGames from './components/allGames/allGames';

// import Sidebar from './sidebar/sidebar';

// General Wrapper for GAMES
const Store = ({dispatch, isFetching, filter, sort, skip, products, loading, error, match, backFromSingleGame}) => {

	const gamesWindow = useRef();

	useEffect(() => {
		if(!backFromSingleGame && !isFetching)  {
			dispatch(changeFetchState())
			dispatch(fetchProductsWithQuery(0, 'All', ''))

		} else if(isFetching) {
			dispatch(fetchDone())
		} else if (backFromSingleGame) {

		}
	}, [dispatch, backFromSingleGame]);


	useEffect(() => {

			// dispatch(changeFetchState())
			dispatch(fetchProductsWithQuery(0, 'All', ''))


	}, [dispatch, filter, sort]);


	// fetch when scroll is in bottom on page
	useEffect(() => {
		// listen addEventListener scroll
		const scrollEvent = () => {
			const wrapper = gamesWindow.current
			let isAtBottom = wrapper && (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

			if (isAtBottom && !isFetching) {
				dispatch(changeFetchState())
				dispatch(fetchProducts(skip, filter, sort ))
			} else if(isFetching) {
				dispatch(fetchDone())
			}
		}
		window.addEventListener('scroll', scrollEvent);
		return () => window.removeEventListener('scroll', scrollEvent);
	}, [dispatch, isFetching, skip, filter, sort]);


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
        return <div className="loaderWrapper">
            <Fade>
                <Loader/>
            </Fade>
        </div>
    }
    return (<main id="games" className="games" ref={gamesWindow}>
        <Fade>
                <PromoGame match={match} products={products}/>
                <div>
                <SortGames/>
                <AllGames products={products} match={match}/>
            </div>
        </Fade>
    </main>)
}

// state, can be retrieved through props or destructuring.
const mapStateToProps = state => ({
    isFetching: state.scrollBottom.isFetching,
	backFromSingleGame: state.products.backFromSingleGame,
    filter: state.products.filter,
    sort: state.products.sort,
    skip: state.products.skip,
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Store);
