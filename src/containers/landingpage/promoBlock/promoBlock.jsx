import React, {useEffect} from 'react';

import Fade from 'react-reveal/Fade';

import {fetchProducts} from '../../../services/products/productActions';

import {connect, useDispatch} from 'react-redux';

const PromoBlock = ({products}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(0, 'All', 'highestRating'))
    }, [dispatch])

    const renderPromo = products
        .items
        .map((game, index) => {

            return (<Fade key={game._id} cascade={true}>

                <div className="PromoBlock__wrapper-container">
                    <figure><img src={game.imgURL} alt={game.title}/></figure>
                    <h3>{game.title}</h3>
                    <p>€{game.price}</p>
                </div>
            </Fade>)
        })

    return (<section className="PromoBlock">
        <Fade>

            <div className="PromoBlock__wrapper">
                <Fade left={true}>
                    <h1>Latest shown games!</h1>
                </Fade>

                {renderPromo}
            </div>
        </Fade>
    </section>)
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(PromoBlock);
