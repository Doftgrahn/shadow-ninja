import React from 'react';
import {dummyData} from '../../../functions/dummyData';

import OneGame from './oneGame';

const AllGames = ({match}) => {

    const renderGames = dummyData.map((game, index) => <OneGame match={match} key={index} gameinfo={game}/>)

    return (<section className="game__wrapper">
        {renderGames}
    </section>)
}

export default AllGames;
