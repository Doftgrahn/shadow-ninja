import React from 'react';

import {Link} from "react-router-dom";

const PromoGame = ({products, match}) => {

    const randomPromo = products.map((game, index) => {
        return (<div className="promo__wrapper">

            <figure>
                <img src={game.imgURL} alt={game.title}/>
            </figure>

            <div className="promo__wrapper--desc">


                <h1>NOW FOR ONLY </h1>
                <h1 className="priceTag"> €{game.price / 2}</h1>
                <h2 className="priceOff"> 50% OFF </h2>
                <Link to={`${match.url}/${game._id}`}>More info...</Link>
            </div>

        </div>)

		// chnage to random later
    })[0];

    // })[Math.floor(Math.random() * products.length)]

    //Uses Regular Index for developmentt.

    //[6]   [Math.floor(Math.random() * products.length)]

    return (<section className="promo">
        {randomPromo}
    </section>)
}

export default PromoGame;

  // <h1>{game.title}</h1>
  // <h3> €{game.price}</h3>
