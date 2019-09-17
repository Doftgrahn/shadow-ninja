import React, {useState} from 'react';
import {connect} from 'react-redux';

const StoreNavbar = ({products}) => {
    const [filterValue, setfilterValue] = useState('');

    const changeFilterValue = (event) => {
        setfilterValue(event.target.value)
    } 

    const actualFilter = products.items.filter(byTitle => {
        return byTitle.title.includes(filterValue)    
    })

    const newArray = actualFilter.map(e => e.title) 
    console.log(newArray)

    const firstMatch = newArray.find( e => {
        if(filterValue === '') {
            return null;
        } else {
            console.log('e: ', e)
            for (let i=0; i<4; i++) {
                
                return e[i]
            }
            //Forloop för utmatning av listItems, första 3 matches.
        }
    })

    console.log(filterValue)
    console.log(firstMatch)



    return (<section className="store-nav">
    <input style={{color:'black'}} value={filterValue} onChange={changeFilterValue} className='titleInput' placeholder='Enter game title'/>  
    <div>{firstMatch}</div>
    </section>)
}

const mapStateToProps = state => ({products: state.products})

export default connect(mapStateToProps)(StoreNavbar);
