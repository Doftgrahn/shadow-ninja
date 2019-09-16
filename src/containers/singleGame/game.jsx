import React,{useEffect} from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

import {addProduct} from '../../services/cart/cartAction';
import {fetchSingleProduct} from '../../services/product/singleProductActions';


import RegularButton from '../../components/buttons/regular-button';
import Loader from '../../components/loader/loader';


const Game = ({ match, history, error,loading, product}) => {
    const dispatch = useDispatch();
    const goBack = history.goBack;

useEffect(() => {
	dispatch(fetchSingleProduct(match.params.id))
}, [dispatch, match.params.id])


if (error) {
	return (<div>...Something Went Wrong, go out and get som sun.</div>)
}
if (loading) {
	return <Loader/>
}

	if (product) {

	    const filterdata = product
	        .map(f => <section key={f._id} className="singleGame__container">
	            <figure>
	                <img src={f.imgURL} alt={f.title}/>
	            </figure>

	            <div className="singleGame__container-description">
	                <h3>{f.title}</h3>
	                <p>Category:<br/> {f.category}</p>
	                <p>price:<br/>
	                    €{f.price}</p>
	                <p>rating:<br/> {f.rating}</p>
	                <p>info:<br/> {f.info}</p>
	                <RegularButton click={goBack} title="Go back"/>
	                <button onClick={() => dispatch(addProduct(f))} className="btn-regular">Buy</button>
	            </div>

	        </section>)

	    return (<main>
	        {filterdata}
	    </main>)
		}
		else if (!product) {
			return null
		}
	}


const mapStateToProps = state => ({
    product: state.singleProduct.item,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Game);
