import React from 'react';
import {Route} from "react-router-dom";
import Game from './game';

const SingleGame = ({match, dispatch, products, loading, error}) => {

    return (<div className="singleGame">
        <Route path={`${match.path}`} render={(props) => <Game {...props}/>}/>
    </div>)
}

export default SingleGame;
