import React from 'react';

const Input = ({value, state, placeholder}) => <input className="regular-input" type="text" value={value} onChange={(event) => state(event.target.value)} placeholder={placeholder}/>

export default Input;
