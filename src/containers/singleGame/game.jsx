import React from 'react';

//Redux
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'

import {addProduct} from '../../services/cart/cartAction';

import RegularButton from '../../components/buttons/regular-button';

const Game = ({data, match, history}) => {
    const dispatch = useDispatch();
    const goBack = history.goBack;

    const filterdata = data
        .filter(e => e._id === match.params.id)
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

export default connect()(Game);
