import React from 'react';

import {Link} from "react-router-dom";

const OneGame = ({gameinfo, match}) => {
    return (<section className="game__container">
        <figure><img src={gameinfo.imgURL} alt={gameinfo.name}/></figure>
        <h3>{gameinfo.title}</h3>
        <div className="game__container-description">
            <p>Category: {gameinfo.category}</p>
            <p>Price: €{gameinfo.price}</p>
            <p>Rating: {gameinfo.rating}</p>
            <Link to={`${match.url}/${gameinfo._id}`}>More info...</Link>
        </div>

    </section>)
}

export default OneGame;
