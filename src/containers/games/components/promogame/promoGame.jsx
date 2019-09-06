import React from 'react';

const PromoGame = ({products}) => {

    const randomPromo = products.map((game, index, array) => {

        return (<div className="promo__wrapper">
        <h1>{game.title}</h1>
            <h3>Sale 50%</h3>
            <figure>
                <img src={game.imgURL} alt={game.title}/>
            </figure>
        </div>)

    })[Math.floor(Math.random() * products.length)];

    //   [Math.floor(Math.random() * products.length)]

    return <section className="promo">
        {randomPromo}
    </section>
}

export default PromoGame;
