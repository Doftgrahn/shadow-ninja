import React, {useState} from 'react';

const SortGames = (props) => {
    const [sortValue, setSortValue] = useState('');

    const options = [
        {
            disabled: 'disabled',
            hidden: 'hidden',
            value: ''

        }, {
            title: 'Most Popular',
            value: 'mostPopular'
        }, {
            title: 'Newest',
            value: 'newest'
        }, {
            title: 'Price - lowest first',
            value: 'lowestPrice'
        }, {
            title: 'Price - lowest first',
            value: 'highestPrice'
        }
    ];

    const renderOptions = options.map((option, index) => {
        return <option  key={index} value={option.value}>{option.title}</option>
    })

    console.log(sortValue);
    return (<div className="sort">
        <div className="sort__wrapper">
            <span>Sort by:</span>
            <select value={sortValue} onChange={e => setSortValue(e.target.value)}>
                {renderOptions}
            </select>
        </div>
    </div>)
}

export default SortGames;
