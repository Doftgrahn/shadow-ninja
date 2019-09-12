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

            <div className="singleGame__container-description">
                <h3>{f.title}</h3>
                <p>Category:<br/> {f.category}</p>
                <p>price:<br/>
                    €{f.price}</p>
                <p>rating:<br/> {f.rating}</p>
                <p>info:<br/> {f.info}</p>
                <RegularButton click={goBack} title="Go back"/>
            </div>

        </section>)

    return (<main>
        {filterdata}
    </main>)
}

export default Game;
