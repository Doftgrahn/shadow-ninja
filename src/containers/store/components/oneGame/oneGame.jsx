import React from 'react';

import {Link} from "react-router-dom";

import RegularButton from '../../../../components/buttons/regular-button';

// Renders ONE game, this loop out with map in ALLGAMES component.
const OneGame = ({gameinfo, match}) => {

    const clickMe = (product) => console.log('PLACEHOLDER', product);

    return (<section className="game__container">

        <Link className="linktoGame" to={`${match.url}/${gameinfo._id}`}>

            <figure>
                <img src={gameinfo.imgURL} alt={gameinfo.name}/>
            </figure>

            <h3>{gameinfo.title}</h3>
            <div className="game__container-description">
                <p>Category: {gameinfo.category}</p>
                <p>Price: €{gameinfo.price}</p>
                <p>Rating: {gameinfo.rating}</p>
            </div>

        </Link>

        <RegularButton title="buy" click={() => clickMe(gameinfo)}/>
        
    </section>)
}

export default OneGame;
