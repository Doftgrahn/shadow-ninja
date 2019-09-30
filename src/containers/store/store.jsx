import React, { useEffect, useRef} from 'react';

import Fade from 'react-reveal/Fade';

// Redux ..
import {connect} from "react-redux";
import {fetchProducts, fetchProductsWithQuery} from '../../services/products/productActions';



// import {} from '../../services/infiniteScroll/scrollActions'
import {changeFetchState} from '../../services/infiniteScroll/scrollActions'
// Spinner, uses for loading Animation.
import Loader from '../../components/loader/loader';

// All Games
import PromoGame from './components/promoGame/promoGame';
import SortGames from './components/sortGames/sortGames';
import AllGames from './components/allGames/allGames';

// General Wrapper for GAMES
const Store = ({dispatch, isFetching, filter, sort, skip, products, loading, error, match}) => {

console.log('skip store.jsx: ', skip);


	const isInitialMount = useRef(true);
	const gamesWindow = useRef();

	// fetch when filter or sort changes
	useEffect(() => {
		if(!isInitialMount.current) {
			console.log('filter store.jsx');
		dispatch(fetchProductsWithQuery(0, filter, sort))

		}
	}, [dispatch, filter, sort, skip]);

	useEffect(() => {
		// fetch on launch
		if( products.length !== 0 ) {
			isInitialMount.current = false;

		}
		else if(isInitialMount.current) {
			dispatch(fetchProductsWithQuery(skip, filter, sort))
			isInitialMount.current = false;
		}
	}, [dispatch, skip, filter, sort, products.length]);

	// fetch when scroll is in bottom on page
	useEffect(() => {
		// listen addEventListener scroll
		const scrollEvent = () => {
			const wrapper = gamesWindow.current
			let isAtBottom = wrapper && (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

			if (isAtBottom) {
				dispatch(changeFetchState())
				if(isFetching) {
					dispatch(fetchProducts(skip, filter, sort ))
				} else if(!isFetching) {
					return null
				}
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

    return (<main id="games" className="games">
		<div ref={gamesWindow}>
	        <PromoGame match={match} products={products}/>
	        <SortGames/>
	        <AllGames products={products} match={match}/>
		</div>
    </main>)
}

// state, can be retrieved through props or destructuring.
const mapStateToProps = state => ({
	isFetching: state.scrollBottom.isFetching,
	filter: state.products.filter,
	sort: state.products.sort,
	skip: state.products.skip,
	products: state.products.items,
	loading: state.products.loading,
	error: state.products.error
});

export default connect(mapStateToProps)(Store);
