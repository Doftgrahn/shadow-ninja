import React from 'react';

import {connect, useDispatch} from "react-redux";
import {setFilter} from '../../../../services/products/productActions';
 const SortGames = ({filter}) => {
 	const dispatch = useDispatch();
    const options = [
        {
            disabled: 'disabled',
            hidden: 'hidden',
            value: ''
        }, {
            title: 'Price - lowest first',
            value: 'lowestPrice'
        }, {
            title: 'Price - heighest first',
            value: 'highestPrice'
        }, {
            title: 'Rating - lowest first',
            value: 'lowestRating'
        }, {
            title: 'Rating - heighest first',
            value: 'highestRating'
        }
    ];
    const renderOptions = options.map((option, index) => {
        return <option  key={index} value={option.value}>{option.title}</option>
    })

    return (<div className="sort">
        <div className="sort__wrapper">
            <span>Sort by:</span>
            <select value={filter} onChange={e => dispatch(setFilter(e.target.value))}>
                {renderOptions}
            </select>
        </div>
    </div>)
}

const mapStateToProps = state => ({filter: state.products.filter})
export default connect(mapStateToProps)(SortGames);
