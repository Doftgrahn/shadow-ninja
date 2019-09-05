import React from 'react';

import {Link} from "react-router-dom";

const OneGame = ({gameinfo, match}) => {
    return (<section className="game__container">
        <figure><img src={gameinfo.imgURL} alt={gameinfo.name}/></figure>
        <h3>{gameinfo.title}</h3>
        <p>{gameinfo.category}</p>
        <p>€{gameinfo.price}</p>
        <p>rating: {gameinfo.rating}</p>
        
        <Link to={`${match.url}/${gameinfo._id}`}>More info...</Link>

    </section>)
}

export default OneGame;
