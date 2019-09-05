import React, {useState} from 'react';

import {Route} from "react-router-dom";

import RegularButton from '../../components/buttons/regular-button';

import {dummyData} from '../../functions/dummyData';

//// Holds routing for SingleGAME

const SingleGame = ({match}) => {
    return (<div className="singleGame"><Route path={`${match.path}`} render={(props) => <Game {...props} data={dummyData}/>}/></div>)
}

export default SingleGame;

////    ACUTAL CONTENT FOR SINGLE GAME

const Game = ({data, match, history}) => {
    const [game] = useState(dummyData);

    const goBack = history.goBack;

    const filterdata = game
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
