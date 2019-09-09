import React,{useEffect} from 'react';



import {connect} from 'react-redux';

import {fetchProducts} from '../../../../actions/productActions';


//dummyData, will get removed once backend is done.
import {dummyData} from '../../../../functions/dummyData';

import OneGame from '../oneGame/oneGame';

// This gets imported into GAMES component.

const AllGames = ({match, dispatch}) => {



    const renderAllGames = dummyData.map((game) => {
        return <OneGame match={match} key={game._id} gameinfo={game}/>
    })

    return (<section className="game__wrapper">
        {renderAllGames}
    </section>)
}

export default AllGames;
