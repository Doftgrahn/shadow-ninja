import React from 'react';
import {Route} from "react-router-dom";
import Game from './game';
import Fade from 'react-reveal/Fade';


const SingleGame = ({match, dispatch, products, loading, error, history}) => {
    return (<div className="singleGame">
    <Fade>
        <Route path={`${match.path}`} render={(props) => <Game {...props}/>}/>
        </Fade>
    </div>)
}

export default SingleGame;
