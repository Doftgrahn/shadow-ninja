import React from 'react';

import {dummyData} from '../../functions/dummyData';

// All Games
import PromoGame from './components/promoGame/promoGame';
import AllGames from './components/allGames/allGames';

// General Wrapper for GAMES
const Store = ({match}) => {
    return (<main className="games">
        <PromoGame match={match} products={dummyData}/>
        <AllGames match={match}/>
    </main>)
}

export default Store;
