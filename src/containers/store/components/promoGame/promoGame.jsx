import React from 'react';

import {Link} from "react-router-dom";

const PromoGame = ({products, match}) => {

    const randomPromo = products.map((game, index) => {
        return (<div className="promo__wrapper">

            <figure>
                <img src={game.imgURL} alt={game.title}/>
            </figure>

            <div className="promo__wrapper--desc">
                <h1>{game.title}</h1>
                <h3>€{game.price}</h3>
                <h3>PROMO €{game.price / 2} 50% off</h3>

                <Link to={`${match.url}/${game._id}`}>More info...</Link>
            </div>

        </div>)

    })[0];
    //Uses Regular Index for developmentt.

    //   [Math.floor(Math.random() * products.length)]

    return (<section className="promo">
        {randomPromo}
    </section>)
}

export default PromoGame;
