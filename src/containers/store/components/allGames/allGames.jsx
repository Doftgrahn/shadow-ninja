import React from 'react';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.

const AllGames = ({match, dispatch, products}) => {

    const renderAllGames = products.map((game) => {
        return <OneGame match={match} key={game._id} gameinfo={game}/>
    })

    return (<section className="game__wrapper">
        {renderAllGames}
    </section>)
}

export default AllGames;
