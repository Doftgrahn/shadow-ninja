import React, {useEffect} from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

import {addProduct} from '../../services/cart/cartAction';
import {fetchSingleProduct} from '../../services/product/singleProductActions';
import {setGameStateTrue} from '../../services/products/productActions';

import RegularButton from '../../components/buttons/regular-button';
import Loader from '../../components/loader/loader';

const Game = ({match, history, error, loading, product}) => {
    const dispatch = useDispatch();
    const goBack = () => {
		dispatch(setGameStateTrue())
		history.goBack();
	}

    useEffect(() => {
        dispatch(fetchSingleProduct(match.params.id))
    }, [dispatch, match.params.id])

    if (error) {
        return (<div>...Something Went Wrong, go out and get som sun.</div>)
    }
    if (loading) {
        return <div className="loaderWrapper"><Loader/></div>
    }

    if (product) {

        const filterdata = product.map(f => <section key={f._id} className="singleGame__container">
            <figure>
                <img src={f.imgURL} alt={f.title}/>
            </figure>

            <div className="singleGame__container-description">

                <h3>{f.title}</h3>
                <div className="info">
                    <p>Category:
                        <span>
                            {f.category}</span>
                    </p>
                    <p>Price:
                        <span>
                            €{f.price}</span>
                    </p>
                    <p className="rating">Rating:
                        <span>
                            {f.rating}
                            / 10</span>
                    </p>
                    <p className="desc">{f.info}</p>
                </div>
                <div className="game_btns">
                    <RegularButton click={goBack} title="Go back"/>
                    <button onClick={() => dispatch(addProduct(f))} className="btn-regular">Add to basket</button>
                </div>
            </div>

        </section>)

        return (<main>
            {filterdata}
        </main>)
    } else if (!product) {
        return null
    }
}

const mapStateToProps = state => ({product: state.singleProduct.item, loading: state.singleProduct.loading, error: state.singleProduct.error});

export default connect(mapStateToProps)(Game);
