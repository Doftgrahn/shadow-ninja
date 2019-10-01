import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

import {ReactComponent as Search} from './../../../../components/SVG_Icons/search/search.svg';

const StoreNavbar = ({toggle, turnOff, products, match, gameinfo}) => {
    const [filterValue, setfilterValue] = useState('');
    
    const blurInput = useRef();
    const blurList = useRef();
    // Sets state to the users input
    const changeFilterValue = (event) => {
        setfilterValue(event.target.value)
    }

    // Filters items and input by title also transforming everything into LowerCase
    const actualFilter = typeof products.items === 'object' ? products.items.filter(byTitle => {
        return byTitle.title.toLowerCase().includes(filterValue.toLowerCase())
    }) : [];


    function handleCleanse (){
        setfilterValue('')
    }


    // Makes a new list after when found titles and ID
    const newArray = actualFilter.map(e => ({title: e.title, _id: e._id}))

    // Limits the new list to a max of 4 items to be suggested to the user
    // Links user to chosen title using matching of IDs
    const limitedAutoComplete = newArray.slice(0, 5).map(x => (
        <Link  ref={blurList} className='listItems' key={x._id} to={`/store/${x._id}`}>
        <li onClick={handleCleanse}>{x.title}</li>
        </Link>
        ))

    function looseFocus() {
        setfilterValue('')
    }    



    // Only shows the suggestions to user if there is something written by the user
    if(filterValue === '') {
        return (<section className="store-nav">
            <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/><div className="searchContainer"><Search/></div>
        </section>)
    } else {
        return (<section className="store-nav">
        <input ref={blurInput} style={{color:'black'}} value={filterValue} onChange={changeFilterValue} onBlur={looseFocus} className='titleInput' placeholder='Enter game title'/><div className="searchContainer"><Search/></div>
        <ul ref={blurList} className='suggestedItems'>
            {limitedAutoComplete}
        </ul>
        </section>)
    }
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(StoreNavbar);
