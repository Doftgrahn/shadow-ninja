import React from 'react';

import AllGames from './components/allGames';

const Games = ({match}) => {
    return (<main className="games">
        <h1>STORE</h1>
        <AllGames match={match}/>
    </main>)
}

export default Games;
