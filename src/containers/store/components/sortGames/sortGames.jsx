import React from 'react';

import {connect, useDispatch} from "react-redux";
import {setSort} from '../../../../services/products/productActions';
import FilterCategory from '../filterCategory/filterCategory'
 const SortGames = ({sort}) => {
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
            title: 'Price - highest first',
            value: 'highestPrice'
        }, {
            title: 'Rating - lowest first',
            value: 'lowestRating'
        }, {
            title: 'Rating - highest first',
            value: 'highestRating'
        }
    ];
    const renderOptions = options.map((option, index) => {
        return <option  key={index} value={option.value}>{option.title}</option>
    })

    return (<div className="sort">
        <div className="sort__wrapper">
		<FilterCategory />
            <span>Sort:</span>
            <select className="select" value={sort} onChange={e => dispatch(setSort(e.target.value))}>
                {renderOptions}
            </select>
        </div>
    </div>)
}

const mapStateToProps = state => ({sort: state.products.sort})
export default connect(mapStateToProps)(SortGames);
