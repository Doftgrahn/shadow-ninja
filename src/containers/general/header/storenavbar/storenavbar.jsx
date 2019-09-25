import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

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
    
    // Makes a new list after when found titles and ID
    const newArray = actualFilter.map(e => ({title: e.title, _id: e._id}))

    // Limits the new list to a max of 4 items to be suggested to the user
    // Links user to chosen title using matching of IDs
    const limitedAutoComplete = newArray.slice(0, 4).map(x => (
        <Link className='listItems' key={x._id} to={`/store/${x._id}`}>
        <li>{x.title}</li>
        </Link>
        ))


    // Only shows the suggestions to user if there is something written by the user
    if(filterValue === '') {
        return (<section className="store-nav">
        <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' 
        placeholder='Enter game title'/>  
        </section>)
    } else {
        return (<section className="store-nav">
        <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/>  
        <ul className='suggestedItems'> 
            {limitedAutoComplete}
        </ul>
        </section>)
    }
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(StoreNavbar);
