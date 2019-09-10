import React from 'react';

import RegularButton from '../../components/buttons/regular-button';

const Game = ({data, match, history}) => {

    const goBack = history.goBack;

    const filterdata = data
        .filter(e => e._id === match.params.id)
        .map(f => <section key={f._id} className="singleGame__container">
            <figure>
                <img src={f.imgURL} alt={f.title}/>
            </figure>

            <h3>{f.title}</h3>
            <div className="singleGame__container-description">
                <p>Category: {f.category}</p>
                <p>price: €{f.price}</p>
                <p>rating: {f.rating}</p>
                <p>info: {f.info}</p>
            </div>

            <RegularButton click={goBack} title="Go back"/>
        </section>)

    return (<main>
        {filterdata}
    </main>)
}

export default Game;
