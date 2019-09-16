import React from 'react';
import {Link} from "react-router-dom";
import RegularButton from '../../../../components/buttons/regular-button';

// Redux
import {connect} from 'react-redux';
import {addProduct} from '../../../../services/cart/cartAction';

// Renders ONE game, this loop out with map in ALLGAMES component.
const OneGame = ({gameinfo, match, addProduct}) => {
    //gameinfo.quantity = 1;

    return (<section className="game__container">
        <Link to={`${match.url}/${gameinfo._id}`}>
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
        <RegularButton title="buy" click={() => addProduct(gameinfo)}/>
    </section>)
}

export default connect(null, {addProduct})(OneGame);
