import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

import {ReactComponent as Search} from './../../../../components/SVG_Icons/search/search.svg';

import {useComponentVisible} from '../../../../functions/useComponentVisible';

const StoreNavbar = ({toggle, turnOff, products, match, gameinfo}) => {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);
    const [filterValue, setfilterValue] = useState('');

    const [showMeny, setShowMeny] = useState(false);

    const toggleMeny = () => setShowMeny(!showMeny);

    const handleCleanse = () => {
        setIsComponentVisible(true)
        setfilterValue('')
        setShowMeny(false)
        turnOff();
    }
    // Sets state to the users input
    const changeFilterValue = (event) => {
        setfilterValue(event.target.value)
        setIsComponentVisible(true)

    };

    // Filters items and input by title also transforming everything into LowerCase
    const actualFilter = typeof products.items === 'object'
        ? products
            .items
            .filter(byTitle => {
                return byTitle
                    .title
                    .toLowerCase()
                    .includes(filterValue.toLowerCase())
            })
        : [];

    // Limits the new list to a max of 4 items to be suggested to the user
    // Links user to chosen title using matching of IDs
    const limitedAutoComplete = actualFilter
        .slice(0, 5)
        .map(x => (<Link className='listItems' key={x._id} to={`/store/${x._id}`}>
            <li onClick={handleCleanse}>{x.title}</li>
        </Link>))

    // Only shows the suggestions to user if there is something written by the user

    return (<section className={`store-nav ${ !showMeny
            ? 'inputVisible'
            : 'inputNotVisible'}`} ref={ref}>
        <input value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/>
        <div onClick={toggleMeny} className="searchContainer"><Search/></div>
        {
            filterValue && isComponentVisible
                ? <ul className='suggestedItems'>
                        {limitedAutoComplete}
                    </ul>
                : null
        }
    </section>)

}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(StoreNavbar);
