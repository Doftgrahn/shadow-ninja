import React from 'react';
import {connect, useDispatch} from "react-redux";

import {setFilter} from '../../../../services/products/productActions';

const FilterCategory = ({filter, products}) => {
	const dispatch = useDispatch();
	let categories = [
		'All', 'Adventure', 'Action', 'Fighting', 'Puzzle', 'RPG', 'Racing', 'Sport', 'Strategy', 'War'
	];
	const renderCategory = categories.map((category, index) => {
		return  <option key={index} value={category}>{category}</option>
	})

		//return send to sortGames.jsx
		return(
			<div className="filterCategory">
			<span>Categories:</span>
				<select value={filter} onChange={e => dispatch(setFilter(e.target.value))}>
					{renderCategory}
				</select>
			</div>
		)
}

const mapStateToProps = state => ({filter: state.products.filter, products:state.products})
export default connect(mapStateToProps)(FilterCategory)
