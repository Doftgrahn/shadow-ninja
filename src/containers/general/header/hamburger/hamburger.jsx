import React from 'react';

const Hamburger = ({toggleState, toggle}) => {

    return(
    <div onClick={toggleState} className={`hamburger ${toggle ? 'active' : ''}`}>
    <span/>
    <span/>
    <span/>
      </div>
    )

}

export default Hamburger;
