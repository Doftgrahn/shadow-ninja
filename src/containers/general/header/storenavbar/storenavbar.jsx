import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';
import oneGame from '../../../store/components/oneGame/oneGame';

const StoreNavbar = ({products, match, gameinfo}) => {
    const [filterValue, setfilterValue] = useState('');
    // Sets state to the users input
    const changeFilterValue = (event) => {
        setfilterValue(event.target.value) 
    } 

    // Filters items and input by title also transforming everything into LowerCase
    const actualFilter = products.items.filter(byTitle => {
        return byTitle.title.toLowerCase().includes(filterValue.toLowerCase())
    })
    
    // Makes a new list after when found titles
    const newArray = actualFilter.map(e => e.title)

    //Function som skall känna av vad man tryckte på och matcha keyVärdet i mapObjektet för att sedan kunna länka vidare med hjälp av detta värdet man hittade
    const selectedGameHandler = () => {
        // console.log('ett spel är valt',limitedAutoComplete.find() )
    }
    // Limits the new list to a max of 4 items to be suggested to the user
    const limitedAutoComplete = newArray.slice(0, 4).map(x => (
        <li onClick={selectedGameHandler}key={x}>{x}</li>
        ))


    // Only shows the suggestions to user if there is something written by the user
    if(filterValue === '') {
        return (<section className="store-nav">
        <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/>  
        </section>)
    } else {
        return (<section className="store-nav">
        <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/>  
        <ul> 
            {limitedAutoComplete}
        </ul>
        </section>)
    }
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(StoreNavbar);
