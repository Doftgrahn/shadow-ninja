import React from 'react';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.
const AllGames = ({match}) => {

    return (<section className="game__wrapper">
        <OneGame match={match}/>
    </section>)
}

export default AllGames;
