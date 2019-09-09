import React from 'react';

import {dummyData} from '../../functions/dummyData';

// All Games
import PromoGame from './components/promoGame/promoGame';
import SortGames from './components/sortGames/sortGames';
import AllGames from './components/allGames/allGames';

import StoreNavbar from './components/storenavbar/storenavbar';

// General Wrapper for GAMES
const Store = ({match}) => {
    return (<main className="games">
    <PromoGame match={match} products={dummyData}/>
            <StoreNavbar/>
            <SortGames/>
            <AllGames match={match}/>
    </main>)
}

export default Store;
