import React from 'react';

//dummyData, will get removed once backend is done.
import {dummyData} from '../../../../functions/dummyData';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.

const AllGames = ({match}) => {

    const renderAllGames = dummyData.map((game) => {
        return <OneGame match={match} key={game._id} gameinfo={game}/>
    })

    return (<section className="game__wrapper">
        {renderAllGames}
    </section>)
}

export default AllGames;
