import React from 'react';

import {dummyData} from '../../functions/dummyData';

// All Games
import PromoGame from './components/promogame/promoGame';
import AllGames from './components/allGames/allGames';

// General Wrapper for GAMES
const Games = ({match}) => {
    return (<main className="games">
        <PromoGame products={dummyData}/>
        <AllGames match={match}/>
    </main>)
}

export default Games;
